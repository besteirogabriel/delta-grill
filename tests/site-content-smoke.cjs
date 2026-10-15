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
      for (const file of ['produtos/dg-1068.html', 'produtos/dg-1027.html', 'categoria-panelas-mexedoras.html']) {
        await page.goto(base + file);
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${file}: overflow em ${width}`);
      }
    }
    console.log('PASS páginas com vídeo em 320/768/1920 px');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
