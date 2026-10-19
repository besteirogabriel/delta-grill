const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH || undefined,args:['--no-sandbox']});
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto((process.env.SITE_URL || 'http://127.0.0.1:8080')+'/representantes.html');
 assert.equal(await page.locator('.result-card').count(),15);
 assert.equal(await page.locator('.result-card a[href^="tel:"]').count(),16);
 const expected={RS:['RUMO SUL'],SC:['LITORAL'],PR:['MATHEUS','PANAM'],SP:['JOLEMAR','MACIEL'],RJ:['ERNESTO'],ES:['MANCINI'],MG:['F REPRESENTAÇÕES'],GO:['OLHO VIVO'],MS:['TOLEDO'],MT:['TOLEDO'],BA:['EKIPECAS'],SE:['EKIPECAS'],CE:['JACKSON'],RN:['JACKSON'],AC:['ZAFFARI'],RO:['ZAFFARI'],PA:['QUALIT'],AM:['QUALIT'],MA:['QUALIT']};
 for(const [state,names] of Object.entries(expected)){
  await page.selectOption('#stateSelect',state);assert.equal(await page.locator('.result-card').count(),names.length,state);
  const content=await page.locator('#results').innerText();for(const name of names)assert(content.includes(name),state+' '+name);
 }
 await page.selectOption('#stateSelect','GO');assert.equal(await page.locator('.result-card a[href^="tel:"]').count(),2);
 await page.selectOption('#stateSelect','AL');assert.equal(await page.locator('.result-card').count(),0);assert(await page.locator('.factory-contact').isVisible());
 await page.selectOption('#stateSelect','');
 for(const [query,match] of [['capital','JOLEMAR'],['adalberto','MACIEL'],['reinaldo','OLHO VIVO'],['clovis','OLHO VIVO'],['claudio','QUALIT']]){
  await page.fill('#searchInput',query);assert.equal(await page.locator('.result-card').count(),1);assert((await page.locator('.result-card').innerText()).includes(match));
 }
 await page.fill('#searchInput','');await page.selectOption('#stateSelect','SC');assert.equal(await page.locator('.result-card a[href^="tel:"]').getAttribute('href'),'tel:+554896544244');
 await page.selectOption('#stateSelect','');await page.locator('.map-disclosure summary').click();await page.locator('.brazil-map [data-state="MT"]').click();assert.match(await page.locator('#results').innerText(),/TOLEDO/);
 for(const width of [320,390,768,1366]){
  await page.setViewportSize({width,height:900});await page.selectOption('#stateSelect','');assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 }
 await page.selectOption('#stateSelect','GO');await page.screenshot({path:'/tmp/representantes-desktop.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});await page.selectOption('#stateSelect','SP');await page.screenshot({path:'/tmp/representantes-mobile.png',fullPage:true});
 assert.deepEqual(errors,[]);console.log('PASS 15 representatives, 16 contacts, 19 states, regional/contact search, phone preservation, map, empty state and 4 viewport widths');await browser.close();
})();
