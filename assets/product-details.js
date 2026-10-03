(() => {
    const page = document.querySelector('.product-page');
    const media = page?.querySelector('.product-media');
    const sourceImage = media?.querySelector('img');
    const code = page?.querySelector('.product-kicker')?.textContent.trim() || 'este produto';
    const title = page?.querySelector('.product-title')?.textContent.trim() || 'Produto Delta Grill';
    const infoGrid = page?.querySelector('.product-info-grid');

    if (!page || !infoGrid) return;

    const categoryImage = (() => {
        const value = title.toLowerCase();
        if (value.includes('panela')) return '../assets/images/GOB00003_Grande.jpeg';
        if (value.includes('misturador')) return '../assets/images/GOB00204_Grande.jpeg';
        if (value.includes('serra')) return '../assets/images/00130.jpg';
        if (value.includes('forno')) return '../assets/images/GOB00023_Grande.jpeg';
        return '../assets/images/00134.jpg';
    })();

    if (media && sourceImage && !media.dataset.galleryReady) {
        const image = sourceImage.cloneNode(true);
        const primaryFigure = document.createElement('figure');
        primaryFigure.className = 'product-media-view';
        primaryFigure.append(image);

        const primaryCaption = document.createElement('figcaption');
        primaryCaption.textContent = 'Vista do produto';
        primaryFigure.append(primaryCaption);

        const ambientFigure = document.createElement('figure');
        ambientFigure.className = 'product-media-view';
        const ambientImage = document.createElement('img');
        ambientImage.src = categoryImage;
        ambientImage.alt = `Imagem ambientada da linha ${title}`;
        ambientImage.loading = 'lazy';
        const ambientCaption = document.createElement('figcaption');
        ambientCaption.textContent = 'Linha Delta Grill em ambiente';
        ambientFigure.append(ambientImage, ambientCaption);

        const gallery = document.createElement('div');
        gallery.className = 'product-media-grid';
        gallery.append(primaryFigure, ambientFigure);
        media.textContent = '';
        media.classList.add('product-media-gallery');
        media.dataset.galleryReady = 'true';
        media.append(gallery);
    }

    const whatsappText = encodeURIComponent(`Olá! Gostaria de receber o manual e o vídeo de apresentação do ${code}.`);
    const resources = document.createElement('section');
    resources.className = 'product-extra-section';
    resources.setAttribute('aria-label', `Materiais de apoio do ${title}`);
    resources.innerHTML = `
        <div class="product-extra-heading">
            <h2>Materiais e apresentação</h2>
            <p>Tenha acesso ao catálogo, aos manuais de instruções e ao atendimento para este produto.</p>
        </div>
        <div class="product-resource-grid">
            <article class="product-resource-card">
                <i class="fas fa-book-open" aria-hidden="true"></i>
                <h3>Manual de instruções</h3>
                <p>Consulte a central de manuais. Se o arquivo deste modelo não estiver listado, solicite-o à equipe.</p>
                <div class="section-actions">
                    <a class="btn btn-outline" href="https://drive.google.com/drive/folders/1HW7wntXjjFC97KKhjK16Bw3dcfhGVFQg" target="_blank" rel="noopener">Abrir manuais</a>
                </div>
            </article>
            <article class="product-resource-card">
                <i class="fas fa-file-pdf" aria-hidden="true"></i>
                <h3>Informações completas</h3>
                <p>Baixe o catálogo atualizado para consultar dados técnicos, dimensões e configurações disponíveis.</p>
                <div class="section-actions">
                    <a class="btn btn-outline" href="../downloads/Delta_Grill_Catalogo_Atualizado.pdf" download>Baixar catálogo</a>
                </div>
            </article>
            <article class="product-resource-card">
                <i class="fas fa-circle-play" aria-hidden="true"></i>
                <h3>Vídeo de apresentação</h3>
                <p>Peça à equipe a demonstração e os vídeos de operação disponíveis para este modelo.</p>
                <div class="section-actions">
                    <a class="btn btn-primary" href="https://wa.me/5554996068328?text=${whatsappText}" target="_blank" rel="noopener">Solicitar vídeo</a>
                </div>
            </article>
        </div>`;
    infoGrid.after(resources);
})();
