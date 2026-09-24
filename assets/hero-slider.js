(() => {
    const gallery = document.querySelector('[data-hero-slider]');
    if (!gallery) return;
    const slides = [...gallery.querySelectorAll('.hero-slide')];
    if (slides.length < 2) return;
    const controls = document.createElement('div');
    controls.className = 'hero-controls';
    controls.innerHTML = `
        <button type="button" class="hero-arrow hero-arrow--previous" aria-label="Banner anterior">&#10094;</button>
        <button type="button" class="hero-arrow hero-arrow--next" aria-label="Próximo banner">&#10095;</button>
        <div class="hero-pagination" role="group" aria-label="Escolher banner">
            ${slides.map((slide, i) => `<button type="button" class="hero-dot" aria-label="Mostrar banner ${i + 1}: ${slide.querySelector('img').alt}"></button>`).join('')}
            <button type="button" class="hero-pause" aria-label="Pausar troca automática"></button>
        </div>`;
    gallery.append(controls);
    const dots = [...controls.querySelectorAll('.hero-dot')];
    const pause = controls.querySelector('.hero-pause');
    let index = 0;
    let timer;
    let paused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let hovering = false;

    function schedule() {
        clearTimeout(timer);
        if (paused || hovering || document.hidden || gallery.contains(document.activeElement)) return;
        timer = setTimeout(() => show(index + 1), Number(slides[index].dataset.duration) || 6000);
    }

    function show(next) {
        index = (next + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            slide.classList.toggle('is-active', i === index);
            slide.setAttribute('aria-hidden', String(i !== index));
            slide.inert = i !== index;
            dots[i].setAttribute('aria-current', String(i === index));
        });
        schedule();
    }

    function updatePause() {
        pause.textContent = paused ? '▶' : 'Ⅱ';
        pause.setAttribute('aria-label', paused ? 'Retomar troca automática' : 'Pausar troca automática');
    }

    controls.querySelector('.hero-arrow--previous').addEventListener('click', () => show(index - 1));
    controls.querySelector('.hero-arrow--next').addEventListener('click', () => show(index + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
    pause.addEventListener('click', () => {
        paused = !paused;
        updatePause();
        schedule();
    });
    gallery.addEventListener('mouseenter', () => { hovering = true; schedule(); });
    gallery.addEventListener('mouseleave', () => { hovering = false; schedule(); });
    gallery.addEventListener('focusin', () => clearTimeout(timer));
    gallery.addEventListener('focusout', () => setTimeout(schedule, 0));
    document.addEventListener('visibilitychange', schedule);
    updatePause();
    show(0);
})();
