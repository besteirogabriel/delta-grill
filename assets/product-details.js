(async () => {
  const media=document.querySelector('.product-media[data-product-code]');
  if(!media) return;
  try {
    const response=await fetch('../assets/catalog-data.json');if(!response.ok) return;
    const products=await response.json();const product=products.find(p=>p.code===media.dataset.productCode);if(!product) return;
    const image=media.querySelector('#main-product-image');
    if(image && product.images.length>1){
      let active=0;const controls=document.createElement('div');controls.className='gallery-controls';
      const prev=document.createElement('button');prev.type='button';prev.textContent='←';prev.setAttribute('aria-label','Foto anterior');
      const next=document.createElement('button');next.type='button';next.textContent='→';next.setAttribute('aria-label','Próxima foto');
      const status=document.createElement('span');status.setAttribute('aria-live','polite');
      controls.append(prev,status,next);media.append(controls);
      const thumbs=document.createElement('div');thumbs.className='gallery-thumbs';thumbs.setAttribute('aria-label','Fotos do produto');
      const buttons=product.images.map((src,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`Ver foto ${i+1} de ${product.code}`);const thumb=document.createElement('img');thumb.src='../'+src;thumb.alt='';thumb.loading='lazy';b.append(thumb);b.addEventListener('click',()=>show(i));thumbs.append(b);return b;});
      media.append(thumbs);
      function show(index){active=(index+product.images.length)%product.images.length;image.src='../'+product.images[active];image.alt=`${product.name} — ${product.code}, foto ${active+1}`;status.textContent=`${active+1} / ${product.images.length}`;buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===active)));}
      prev.addEventListener('click',()=>show(active-1));next.addEventListener('click',()=>show(active+1));
      thumbs.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();show(active+(e.key==='ArrowRight'?1:-1));buttons[active].focus();}});
      let touchX;image.addEventListener('touchstart',e=>touchX=e.changedTouches[0].clientX,{passive:true});image.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>45)show(active+(dx<0?1:-1));},{passive:true});show(0);
    }
    // Approved per-product media only. Missing materials do not produce broken embeds.
    if(product.ambient){const fig=document.createElement('figure');fig.className='product-ambient';const img=document.createElement('img');img.src='../'+product.ambient;img.alt=product.name+' em ambiente de uso';img.loading='lazy';fig.append(img);media.append(fig);}
    if(product.video && /^[A-Za-z0-9_-]{11}$/.test(product.video)){const frame=document.createElement('iframe');frame.className='product-video';frame.src='https://www.youtube-nocookie.com/embed/'+product.video;frame.title='Apresentação de '+product.name;frame.loading='lazy';frame.allowFullscreen=true;media.append(frame);}
  }catch(error){/* The static photograph and commercial information remain available. */}
})();
