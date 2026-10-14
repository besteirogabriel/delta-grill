(() => {
  const form = document.getElementById('saw-filters');
  if (!form) return;
  const cards = [...document.querySelectorAll('[data-saw-group]')];
  const controls = {tamanho:form.elements.tamanho, configuracao:form.elements.configuracao, producao:form.elements.producao};
  const hasProduction = cards.some(c => c.dataset.production);
  controls.producao.disabled = !hasProduction;
  const legacy = {'146':['1,46 m','sem'],'146-moedor':['1,46 m','moedor'],'180':['1,80 m','sem'],'180-moedor':['1,80 m','moedor'],'180-mesa-movel':['1,80 m','mesa'],'180-mesa-movel-moedor':['1,80 m','mesa-moedor'],'220':['2,20 m',''],'282':['2,82 m','']};
  function render() {
    const p = new URL(location.href).searchParams;
    const old = legacy[p.get('serra')];
    for (const [key, control] of Object.entries(controls)) {
      const requested = p.get(key) || (old && key === 'tamanho' ? old[0] : old && key === 'configuracao' ? old[1] : '');
      control.value = [...control.options].some(o => o.value === requested) && !control.disabled ? requested : '';
    }
    let count = 0;
    cards.forEach(card => {
      card.hidden = !!((controls.tamanho.value && card.dataset.size !== controls.tamanho.value) || (controls.configuracao.value && card.dataset.configuration !== controls.configuracao.value) || (controls.producao.value && card.dataset.production !== controls.producao.value));
      if (!card.hidden) count++;
    });
    document.getElementById('saw-results-summary').textContent = `${count} ${count === 1 ? 'modelo encontrado' : 'modelos encontrados'}`;
    document.getElementById('filter-empty').hidden = count > 0;
  }
  function update(reset=false) {
    const url = new URL(location.href); url.searchParams.delete('serra');
    Object.entries(controls).forEach(([key,c]) => { if (!reset && c.value && !c.disabled) url.searchParams.set(key,c.value); else url.searchParams.delete(key); });
    history.pushState(null,'',url); render();
  }
  form.addEventListener('change',()=>update());
  form.addEventListener('submit',e=>e.preventDefault());
  form.addEventListener('reset',e=>{ e.preventDefault(); update(true); });
  window.addEventListener('popstate',render);
  document.querySelector('.filters-toggle').addEventListener('click',e=>{
    const button=e.currentTarget; const open=button.getAttribute('aria-expanded')!=='true';
    button.setAttribute('aria-expanded',String(open));document.getElementById('filter-panel').classList.toggle('is-open',open);
  });
  render();
  // Production bands are supplied by Delta Grill, never inferred from motor or blade size.
  fetch('assets/catalog-data.json').then(response => {
    if (!response.ok) throw new Error('catalog');
    return response.json();
  }).then(products => {
    cards.forEach(card => {
      const code = card.querySelector('.card-code')?.textContent.trim();
      const product = products.find(p => p.code === code);
      card.dataset.production = ['alta','media','baixa'].includes(product?.production) ? product.production : '';
    });
    controls.producao.disabled = !cards.some(card => card.dataset.production);
    if (!controls.producao.disabled) document.getElementById('production-note').textContent = 'Alta produção: alto volume de cortes. Média produção: demanda diária moderada. Baixa produção: menor volume de cortes. Consulte a equipe para confirmar a adequação à sua operação.';
    render();
  }).catch(() => { /* Size and configuration filters remain available offline. */ });
})();
