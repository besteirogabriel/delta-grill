(function () {
    document.querySelectorAll('[data-product-filter-group]').forEach(function (nav) {
        var section = nav.closest('.page-section');
        var cards = section ? Array.from(section.querySelectorAll('.product-detail-card')) : [];
        nav.addEventListener('click', function (event) {
            var button = event.target.closest('[data-product-filter]');
            if (!button) return;
            var value = button.dataset.productFilter;
            nav.querySelectorAll('[data-product-filter]').forEach(function (item) {
                item.setAttribute('aria-pressed', item === button ? 'true' : 'false');
            });
            cards.forEach(function (card) {
                var code = card.querySelector('.product-code');
                var matches = value === 'todos' || (code && code.textContent.replace(/\D/g, '') === value);
                card.hidden = !matches;
            });
        });
    });
}());
