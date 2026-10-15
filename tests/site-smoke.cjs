/* Run against a local HTTP server. PLAYWRIGHT_MODULE may point at a bundled install. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const base=process.env.SITE_URL || 'http://127.0.0.1:8080';
(async()=>{
  const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH || undefined,args:['--no-sandbox']});
  const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const go=async p=>{await page.goto(base+'/'+p,{waitUntil:'load'});};
  const overflow=async()=>page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));
  const pages=fs.readdirSync(root).filter(n=>n.endsWith('.html')).concat(fs.readdirSync(path.join(root,'produtos')).filter(n=>n.endsWith('.html')).map(n=>'produtos/'+n));
  for(const width of (process.env.SKIP_LAYOUTS ? [] : [390,1366])){
    await page.setViewportSize({width,height:900});
    for(const file of pages){await go(file);const size=await overflow();assert(size.scroll<=size.width,`${file}: horizontal overflow at ${width}: ${size.scroll}`);assert.equal(await page.locator('h1').count(),1,file+': one h1');assert.equal(await page.locator('.site-header').count(),1);}
    console.log(`PASS ${pages.length} pages at ${width}px`);
  }
  await page.setViewportSize({width:1366,height:900});
  await go('categoria-serras-fita.html');
  const visible=()=>page.locator('[data-saw-group]:visible').count();
  assert.equal(await visible(),24);
  await page.selectOption('[name=tamanho]','1,46 m');assert.equal(await visible(),5);
  await page.selectOption('[name=configuracao]','moedor');assert.equal(await visible(),2);
  assert.match(await page.locator('#saw-results-summary').innerText(),/^2 modelos/);
  await page.reload();assert.equal(await visible(),2);
  await page.selectOption('[name=tamanho]','2,82 m');assert.equal(await visible(),0);assert(await page.locator('#filter-empty').isVisible());
  await page.goBack();assert.equal(await visible(),2);
  await page.getByRole('button',{name:'Limpar filtros'}).click();assert.equal(await visible(),24);
  await go('produtos.html?serra=180-mesa-movel-moedor#serras-fita');await page.waitForURL('**/categoria-serras-fita.html?serra=180-mesa-movel-moedor');assert.equal(await visible(),2);
  await page.route('**/assets/catalog-data.json', async route => {
    const data=JSON.parse(fs.readFileSync(path.join(root,'assets/catalog-data.json'),'utf8'));
    data.find(p=>p.code==='DG 1026').production='baixa';
    await route.fulfill({json:data});
  });
  await go('categoria-serras-fita.html');await page.waitForFunction(()=>!document.querySelector('[name=producao]').disabled);
  await page.selectOption('[name=producao]','baixa');assert.equal(await visible(),1);
  await page.selectOption('[name=configuracao]','moedor');assert.equal(await visible(),0);
  await page.unroute('**/assets/catalog-data.json');
  console.log('PASS filters, combination, counter, empty state, reset, reload, back and legacy links');
  await go('busca.html?q=DG1026');await page.waitForFunction(()=>document.getElementById('search-status').textContent.includes('encontrado'));assert.equal(await page.locator('#search-results .saw-product').count(),1);
  for(const [query,count] of [['serra 1,46',5],['serras 1,46m',5],['serra 1460mm',5],['panela mexedora',6],['moedor',3],['inexistente xyz',0]]){await page.fill('#catalog-query',query);const actual=await page.locator('#search-results .saw-product').count();if(query==='moedor')assert(actual>=count);else assert.equal(actual,count);}
  await page.fill('#catalog-query','<img src=x onerror=alert(1)>');assert.equal(await page.locator('#search-results img').count(),0);
  console.log('PASS code, size, name, no results and safe search rendering');
  await go('produtos/dg-1026.html');await page.waitForSelector('.gallery-controls');const before=await page.locator('#main-product-image').getAttribute('src');await page.getByRole('button',{name:'Próxima foto'}).click();assert.notEqual(await page.locator('#main-product-image').getAttribute('src'),before);
  await page.getByRole('button',{name:'Ampliar foto do produto'}).click();
  assert(await page.getByRole('dialog').isVisible());
  const enlarged=await page.locator('.product-photo-dialog > img').getAttribute('src');
  await page.keyboard.press('ArrowRight');
  assert.notEqual(await page.locator('.product-photo-dialog > img').getAttribute('src'),enlarged);
  await page.keyboard.press('Escape');
  assert(!(await page.getByRole('dialog').isVisible()));
  assert(await page.getByRole('button',{name:'Ampliar foto do produto'}).evaluate(el=>el===document.activeElement));
  assert.equal(await page.locator('.technical-table tr').filter({hasText:'Fita estendida'}).count(),0);
  assert.match(await page.locator('.technical-table').innerText(),/Garantia[\s\S]*3 meses/);
  const whatsapp=await page.getByRole('link',{name:'Solicitar orçamento',exact:true}).getAttribute('href');const message=new URL(whatsapp).searchParams.get('text');assert(message.includes('DG 1026')&&message.includes('Serra-Fita 1,46 m'));
  assert.equal(await page.locator('.related-products .saw-product').count(),3);
  console.log('PASS gallery, related products and WhatsApp product identification');
  await go('representantes.html');await page.locator('.map-disclosure summary').click();await page.locator('.brazil-map [data-state="RS"]').click();assert.equal(await page.locator('#stateSelect').inputValue(),'RS');assert.equal(await page.locator('.result-card').count(),0);assert(await page.locator('.factory-contact').isVisible());
  await page.locator('#stateGrid button').filter({hasText:/^SP$/}).click();assert.equal(await page.locator('.brazil-map [data-state="SP"]').getAttribute('aria-pressed'),'true');
  console.log('PASS state map and factory separation');
  for(const width of [320,768,1920]){await page.setViewportSize({width,height:900});for(const file of ['index.html','produtos.html','categoria-serras-fita.html','produtos/dg-1026.html','representantes.html','contato.html']){await go(file);const size=await overflow();assert(size.scroll<=width,`${file} overflow at ${width}: ${size.scroll}`);}console.log(`PASS representative layouts at ${width}px`);}
  await page.setViewportSize({width:390,height:844});await go('categoria-serras-fita.html');await page.getByRole('button',{name:'Menu',exact:false}).click();assert(await page.locator('#site-navigation').isVisible());await page.keyboard.press('Escape');assert(!(await page.locator('#site-navigation').isVisible()));await page.getByRole('button',{name:'Filtros',exact:true}).click();assert(await page.locator('#filter-panel').isVisible());
  await page.screenshot({path:'/tmp/delta-mobile-category.png',fullPage:true});await go('produtos/dg-1026.html');await page.screenshot({path:'/tmp/delta-mobile-product.png',fullPage:true});await go('index.html');await page.screenshot({path:'/tmp/delta-mobile-home.png',fullPage:true});
  assert.deepEqual(errors,[]);console.log('PASS mobile interactions and no page errors');
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
