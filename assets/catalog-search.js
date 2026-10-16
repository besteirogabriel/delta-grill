(async () => {
  const input=document.getElementById('catalog-query'), results=document.getElementById('search-results'), status=document.getElementById('search-status');
  if (!input) return;
  const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/(\d)[.,](\d)/g,'$1$2').replace(/([0-9])([a-z])/g, '$1 $2')
    .replace(/[^a-z0-9]+/g,' ')
    .replace(/\bserras\b/g, 'serra')
    .replace(/\bmoedores\b/g, 'moedor')
    .replace(/\braladores\b/g, 'ralador')
    .replace(/\bmisturadores\b/g, 'misturador')
    .replace(/\bpanelas\b/g, 'panela')
    .replace(/\b(mexedoras?|misturadeiras?|misturadoras)\b/g, 'misturadora')
    .replace(/\bensacadoras?\b/g, 'ensacadeira')
    .trim();
  try {
    const response=await fetch('assets/catalog-data.json'); if (!response.ok) throw Error('catalog'); const products=await response.json();
    function render() {
      const tokens=normalize(input.value).split(/\s+/).filter(Boolean);
      const matches=products.filter(p=>{const value=normalize([p.code,p.code.replace(/\s/g,''),p.name,p.categoryName,p.description,p.size ? Math.round(parseFloat(p.size.replace(',', '.')) * 1000) + ' mm' : '',...p.specs,...p.applications].join(' '));return tokens.every(token=>value.includes(token));});
      results.replaceChildren();status.textContent=`${matches.length} ${matches.length===1?'produto encontrado':'produtos encontrados'}`;
      if (!matches.length) { const p=document.createElement('p');p.textContent='Nenhum produto encontrado. Tente buscar pelo código DG, por uma categoria ou por outra característica.';results.append(p); }
      matches.forEach(p=>{
        const a=document.createElement('a');a.className='saw-product';a.href=p.url;
        if(!p.images[0]){const placeholder=document.createElement('span');placeholder.className='saw-photo-pending';placeholder.textContent='Foto sob consulta';a.append(placeholder);}
        if(p.images[0]){const image=document.createElement('img');image.src=p.images[0];image.alt=p.imageAlt || p.name;image.loading='lazy';a.append(image);}
        for(const [className,text] of [['card-code',p.code],['card-name',p.name],['card-specs',p.specs.join(' · ')],['card-use',p.applications.join(', ')],['saw-product-action','Ver produto →']]){const el=document.createElement('span');el.className=className;el.textContent=text;a.append(el);}
        results.append(a);
      });
    }
    const read=()=>{input.value=new URL(location.href).searchParams.get('q')||'';render();};
    input.form.addEventListener('submit',e=>{e.preventDefault();const u=new URL(location.href);u.searchParams.set('q',input.value);history.pushState(null,'',u);render();});
    input.addEventListener('input',()=>{const u=new URL(location.href);u.searchParams.set('q',input.value);history.replaceState(null,'',u);render();});
    window.addEventListener('popstate',read);read();
  }catch(e){status.textContent='Não foi possível carregar a busca. Acesse Produtos no menu para navegar pelas categorias.';}
})();
