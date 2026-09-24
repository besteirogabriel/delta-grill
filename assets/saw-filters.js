(() => {
    const nav = document.querySelector('.saw-size-nav');
    if (!nav) return;
    const links = [...nav.querySelectorAll('[data-saw-filter]')];
    const cards = [...document.querySelectorAll('[data-saw-group]')];
    const summary = document.getElementById('saw-results-summary');

    function applyFilter() {
        const requested = new URL(window.location.href).searchParams.get('serra') || 'todas';
        const selected = links.find(link => link.dataset.sawFilter === requested) || links[0];
        const value = selected.dataset.sawFilter;
        let count = 0;
        cards.forEach(card => {
            card.hidden = value !== 'todas' && card.dataset.sawGroup !== value;
            if (!card.hidden && card.matches('a')) count++;
        });
        links.forEach(link => link.setAttribute('aria-current', String(link === selected)));
        summary.textContent = `${selected.textContent}: ${count} ${count === 1 ? 'modelo disponível' : 'modelos disponíveis'} para consulta.`;
    }

    nav.addEventListener('click', event => {
        const link = event.target.closest('[data-saw-filter]');
        if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        const url = new URL(window.location.href);
        url.searchParams.set('serra', link.dataset.sawFilter);
        url.hash = 'serras-fita';
        if (url.href !== window.location.href) history.pushState(null, '', url);
        applyFilter();
    });
    window.addEventListener('popstate', applyFilter);
    applyFilter();
})();
