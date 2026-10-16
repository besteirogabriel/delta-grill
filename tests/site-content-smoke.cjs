/* Serve the repository over HTTP. External WhatsApp requests are intercepted. */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const base = (process.env.SITE_URL || 'http://127.0.0.1:8080').replace(/\/$/, '') + '/';

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROME_PATH || undefined,
    headless: true,
    args: ['--no-sandbox']
  });
  try {
    const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
    const products = JSON.parse(fs.readFileSync(path.join(root, 'assets/catalog-data.json')));
    await page.route('https://wa.me/**', route => route.fulfill({
      contentType: 'text/html', body: '<p>Destino interceptado pelo teste local</p>'
    }));
    let videos = 0;
    for (const product of products) {
      await page.goto(base + product.url);
      await page.waitForFunction(() => document.querySelector('.gallery-enlarge') || !document.querySelector('#main-product-image'));
      assert.equal(await page.locator('h1').innerText(), product.name, product.code);
      // Values checked against the official catalogue, pages 4, 8 and 29.
      const cell = label => page.locator('.technical-table tr').filter({has: page.getByRole('rowheader', {name: label, exact: true})}).locator('td');
      if (product.category === 'panelas-mexedoras') {
        assert.equal(await cell('Produto (L × A × P)').innerText(), '33,7 x 32,5 x 34,7 cm');
        assert.equal(await cell('Embalagem (L × A × P)').innerText(), '33,7 x 32,5 x 34,7 cm');
        assert.equal(await cell('Peso embalado').innerText(), '8 kg');
        assert.match(await cell('Limite recomendado').innerText(), /2 kg de farinha/);
      }
      if (product.code === 'DG 1088') assert.equal(await cell('Embalagem (L × A × P)').innerText(), '45 x 77 x 44 cm');
      if (product.category === 'serras-fita' && !['DG 1047', 'DG 1048', 'DG 1049'].includes(product.code)) {
        assert.equal(await cell('Tipo').innerText(), 'Monofásico');
      }
      const bladeLengths = {'DG 3203':'1.460 mm','DG 3013':'1.800 mm','DG 3172':'2.200 mm','DG 3195':'2.820 mm'};
      if (bladeLengths[product.code]) {
        assert.equal(await cell('Comprimento').innerText(), bladeLengths[product.code]);
        assert.equal(await cell('Largura').innerText(), '5/8 pol.');
        assert.equal(await cell('Espessura').innerText(), '0,5 mm');
        assert.match(await page.locator('.media-caption').innerText(), /Imagem da linha/);
      }
      const links = await page.locator('a[href*="wa.me/"]').all();
      assert(links.length > 0, product.code + ': contato comercial ausente');
      for (const link of links) {
        const url = new URL(await link.getAttribute('href'));
        const message = url.searchParams.get('text') || '';
        assert(message.includes(product.code) && message.includes(product.name), product.code + ': WhatsApp sem identificação');
      }
      const mainImage = page.locator('#main-product-image');
      if (await mainImage.count()) {
        assert(await mainImage.evaluate(img => img.complete && img.naturalWidth > 0), product.code + ': foto principal não carregou');
      }
      for (const image of product.images) assert(fs.existsSync(path.join(root, image)), product.code + ': arquivo de foto ausente');
      if (product.video) {
        videos++;
        assert.equal(await page.locator('iframe.product-video').getAttribute('src'), 'https://www.youtube-nocookie.com/embed/' + product.video + '?rel=0');
        if (product.videoScope === 'family') assert.match(await page.locator('.product-video-section').innerText(), /Demonstração da linha/);
      } else assert.equal(await page.locator('iframe.product-video').count(), 0);
    }
    console.log(`PASS ${products.length} produtos: títulos, imagens existentes, WhatsApp e ${videos} associações de vídeo`);

    await page.goto(base + 'categoria-acessorios.html');
    assert.equal(await page.locator('.saw-product').count(), 4);
    await page.getByRole('link').filter({hasText: 'DG 3203'}).click();
    assert(page.url().endsWith('produtos/dg-3203.html'));
    await page.goto(base + 'busca.html?q=DG3203');
    await page.waitForSelector('#search-results .saw-product');
    assert.equal(await page.locator('#search-results .saw-product').count(), 1);
    await page.goto(base + 'categoria-fornos-aquecimento.html');
    for (const kind of ['turbo', 'esteira']) {
      const href = await page.getByRole('link', {name:'Consultar forno ' + kind + ' →', exact:true}).getAttribute('href');
      assert(new URL(href).searchParams.get('text').includes('forno ' + kind));
    }
    console.log('PASS navegação/busca de acessórios e consulta específica dos fornos');
    await page.goto(base + 'contato.html');
    await page.getByRole('button', { name: 'Continuar no WhatsApp' }).click();
    assert(page.url().endsWith('contato.html'), 'Formulário vazio não deve navegar');
    await page.getByLabel('Seu nome').fill('Teste QA');
    await page.getByLabel('Como podemos ajudar?').fill('Consulta de teste & orçamento DG 1026');
    await page.getByRole('button', { name: 'Continuar no WhatsApp' }).click();
    await page.waitForURL('https://wa.me/**');
    assert.equal(new URL(page.url()).searchParams.get('text'), 'Olá! Meu nome é Teste QA. Consulta de teste & orçamento DG 1026');
    console.log('PASS formulário obrigatório e mensagem codificada; destino externo interceptado');

    for (const width of [320, 768, 1920]) {
      await page.setViewportSize({ width, height: 900 });
      for (const file of ['produtos/dg-1068.html', 'produtos/dg-1027.html', 'categoria-panelas-mexedoras.html', 'produtos/dg-3203.html', 'categoria-acessorios.html', 'categoria-fornos-aquecimento.html']) {
        await page.goto(base + file);
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${file}: overflow em ${width}`);
      }
    }
    console.log('PASS páginas com vídeo em 320/768/1920 px');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
