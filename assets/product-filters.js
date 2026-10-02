(() => {
    const filters = [...document.querySelectorAll('[data-product-filter-group]')].map(nav => {
        const section = nav.closest('.page-section');
        return {
            nav,
            section,
            parameter: nav.dataset.productParam,
            links: [...nav.querySelectorAll('[data-product-filter]')],
            cards: section ? [...section.querySelectorAll('[data-product-group]')] : [],
            summary: section ? section.querySelector('[role="status"]') : null
        };
    });

    function applyFilter(filter) {
        const requested = new URL(window.location.href).searchParams.get(filter.parameter) || 'todos';
        const selected = filter.links.find(link => link.dataset.productFilter === requested) || filter.links[0];
        const value = selected.dataset.productFilter;
        let count = 0;

        filter.cards.forEach(card => {
            card.hidden = value !== 'todos' && card.dataset.productGroup !== value;
            if (!card.hidden) count++;
        });
        filter.links.forEach(link => link.setAttribute('aria-current', String(link === selected)));
        if (filter.summary) {
            filter.summary.textContent = `${selected.textContent}: ${count} ${count === 1 ? 'modelo disponível' : 'modelos disponíveis'} para consulta.`;
        }
    }

    filters.forEach(filter => {
        filter.nav.addEventListener('click', event => {
            const link = event.target.closest('[data-product-filter]');
            if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            const url = new URL(window.location.href);
            url.searchParams.set(filter.parameter, link.dataset.productFilter);
            url.hash = filter.section.id;
            if (url.href !== window.location.href) history.pushState(null, '', url);
            applyFilter(filter);
        });
    });

    window.addEventListener('popstate', () => filters.forEach(applyFilter));
    filters.forEach(applyFilter);
})();
