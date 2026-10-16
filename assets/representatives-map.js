(() => {
  const select=document.getElementById('stateSelect');
  const paths=[...document.querySelectorAll('.brazil-map [data-state]')];
  if(!select || !paths.length) return;
  function sync(){paths.forEach(path=>path.setAttribute('aria-pressed',String(path.dataset.state===select.value)));}
  function choose(path){select.value=select.value===path.dataset.state?'':path.dataset.state;select.dispatchEvent(new Event('change'));}
  paths.forEach(path=>{path.addEventListener('click',()=>choose(path));path.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose(path);}});});
  select.addEventListener('change',sync);
  document.getElementById('stateGrid').addEventListener('click',sync);
  sync();
})();
