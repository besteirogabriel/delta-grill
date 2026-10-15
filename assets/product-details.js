(async () => {
  const media = document.querySelector('.product-media[data-product-code]');
  if (!media) return;

  try {
    const response = await fetch('../assets/catalog-data.json');
    if (!response.ok) return;
    const products = await response.json();
    const product = products.find(item => item.code === media.dataset.productCode);
    if (!product) return;

    const image = media.querySelector('#main-product-image');
    let active = 0;
    let status;
    let buttons = [];
    let enlargedImage;
    let enlargedStatus;

    function show(index) {
      active = (index + product.images.length) % product.images.length;
      const source = '../' + product.images[active];
      const description = product.imageAlt || `${product.name} — ${product.code}, foto ${active + 1}`;
      image.src = source;
      image.alt = description;
      if (status) status.textContent = `${active + 1} / ${product.images.length}`;
      if (enlargedImage) {
        enlargedImage.src = source;
        enlargedImage.alt = description;
        enlargedStatus.textContent = `${product.code} · Foto ${active + 1} de ${product.images.length}`;
      }
      buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === active)));
    }

    function button(label, text, callback) {
      const element = document.createElement('button');
      element.type = 'button';
      element.textContent = text;
      element.setAttribute('aria-label', label);
      element.addEventListener('click', callback);
      return element;
    }

    if (image && product.images.length) {
      const enlarge = button('Ampliar foto do produto', 'Ampliar foto', () => {
        show(active);
        dialog.showModal();
        document.body.classList.add('photo-dialog-open');
      });
      enlarge.className = 'gallery-enlarge';
      media.querySelector('.product-gallery-main').append(enlarge);

      const dialog = document.createElement('dialog');
      dialog.className = 'product-photo-dialog';
      dialog.setAttribute('aria-label', 'Fotos ampliadas de ' + product.code);
      const close = button('Fechar foto ampliada', 'Fechar ×', () => dialog.close());
      close.className = 'photo-dialog-close';
      enlargedImage = document.createElement('img');
      enlargedStatus = document.createElement('p');
      enlargedStatus.setAttribute('aria-live', 'polite');
      const navigation = document.createElement('div');
      navigation.className = 'photo-dialog-navigation';
      if (product.images.length > 1) navigation.append(button('Foto anterior ampliada', '← Anterior', () => show(active - 1)));
      navigation.append(enlargedStatus);
      if (product.images.length > 1) navigation.append(button('Próxima foto ampliada', 'Próxima →', () => show(active + 1)));
      dialog.append(close, enlargedImage, navigation);
      document.body.append(dialog);
      dialog.addEventListener('close', () => {
        document.body.classList.remove('photo-dialog-open');
        enlarge.focus();
      });
      dialog.addEventListener('click', event => {
        if (event.target !== dialog) return;
        const bounds = dialog.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
      });
      dialog.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault();
        show(active + (event.key === 'ArrowRight' ? 1 : -1));
      });

      if (product.images.length > 1) {
        const controls = document.createElement('div');
        controls.className = 'gallery-controls';
        status = document.createElement('span');
        status.setAttribute('aria-live', 'polite');
        controls.append(button('Foto anterior', '←', () => show(active - 1)), status, button('Próxima foto', '→', () => show(active + 1)));
        media.append(controls);
        const thumbs = document.createElement('div');
        thumbs.className = 'gallery-thumbs';
        thumbs.setAttribute('aria-label', 'Fotos do produto');
        buttons = product.images.map((source, i) => {
          const thumbButton = button(`Ver foto ${i + 1} de ${product.code}`, '', () => show(i));
          const thumb = document.createElement('img');
          thumb.src = '../' + source;
          thumb.alt = '';
          thumb.loading = 'lazy';
          thumbButton.append(thumb);
          thumbs.append(thumbButton);
          return thumbButton;
        });
        media.append(thumbs);
        thumbs.addEventListener('keydown', event => {
          if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
          event.preventDefault();
          show(active + (event.key === 'ArrowRight' ? 1 : -1));
          buttons[active].focus();
        });
        let touch;
        image.addEventListener('touchstart', event => {
          const point = event.changedTouches[0];
          touch = {x: point.clientX, y: point.clientY};
        }, {passive: true});
        image.addEventListener('touchend', event => {
          if (!touch) return;
          const point = event.changedTouches[0];
          const dx = point.clientX - touch.x;
          const dy = point.clientY - touch.y;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) show(active + (dx < 0 ? 1 : -1));
          touch = null;
        }, {passive: true});
      }
      show(0);
    }

    // Only approved, model-specific media belong in these fields.
    if (product.ambient) {
      const figure = document.createElement('figure');
      figure.className = 'product-ambient';
      const ambient = document.createElement('img');
      ambient.src = '../' + product.ambient;
      ambient.alt = product.name + ' em ambiente de uso';
      ambient.loading = 'lazy';
      figure.append(ambient);
      media.append(figure);
    }
    if (product.video && /^[A-Za-z0-9_-]{11}$/.test(product.video)) {
      const section = document.createElement('section');
      section.className = 'product-video-section';
      const heading = document.createElement('h2');
      heading.textContent = product.videoScope === 'family' ? 'Veja a linha em ação' : 'Veja o produto em ação';
      section.append(heading);
      if (product.videoScope === 'family') {
        const note = document.createElement('p');
        note.textContent = 'Demonstração da linha de panelas misturadoras de 10 L. A cor exibida pode variar em relação a este modelo.';
        section.append(note);
      }
      const frame = document.createElement('iframe');
      frame.className = 'product-video' + (product.videoFormat === 'portrait' ? ' product-video-portrait' : '');
      frame.src = 'https://www.youtube-nocookie.com/embed/' + product.video + '?rel=0';
      frame.title = product.videoTitle || 'Apresentação de ' + product.name;
      frame.loading = 'lazy';
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.allowFullscreen = true;
      const direct = document.createElement('a');
      direct.href = 'https://www.youtube.com/shorts/' + product.video;
      direct.textContent = 'Assistir no YouTube ↗';
      direct.target = '_blank';
      direct.rel = 'noopener';
      section.append(frame, direct);
      media.classList.add('has-video');
      media.append(section);
    }
  } catch (error) {
    // Static images, specifications and quotation links still work if the catalogue cannot load.
  }
})();
