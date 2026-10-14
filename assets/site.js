(() => {
  const toggle = document.querySelector('.site-menu-toggle');
  const nav = document.getElementById('site-navigation');
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.site-products[open]').forEach(n => n.open = false);
    if (nav?.classList.contains('is-open')) { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); }
  });
  document.addEventListener('click', e => document.querySelectorAll('.site-products[open]').forEach(n => { if (!n.contains(e.target)) n.open = false; }));
  document.querySelectorAll('[data-language]').forEach(a => {
    if (!['localhost','127.0.0.1',''].includes(location.hostname)) {
      const url = new URL('https://translate.google.com/translate');
      url.search = new URLSearchParams({sl:'pt',tl:a.dataset.language,u:location.href});
      a.href = url.href; a.target = '_blank'; a.rel = 'noopener';
    }
  });
  const whats = document.querySelector('.site-whatsapp span');
  if (whats) whats.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 .8A15 15 0 0 0 3 23.3L.9 31l7.9-2.1A15 15 0 1 0 16 .8zm0 27.4a12.2 12.2 0 0 1-6.2-1.7l-.5-.3-4.7 1.2 1.3-4.6-.3-.5A12.3 12.3 0 1 1 16 28.2zm6.8-9.2c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3s1.3 3.4 1.5 3.6c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z"/></svg>';
  document.getElementById('contact-request')?.addEventListener('submit', e => {
    e.preventDefault(); const data = new FormData(e.target);
    location.href = 'https://wa.me/5554996068328?text=' + encodeURIComponent(`Olá! Meu nome é ${data.get('name')}. ${data.get('message')}`);
  });
  document.querySelectorAll('.products-tab').forEach(tab => tab.addEventListener('click', () => {
    document.querySelectorAll('.products-tab').forEach(t => t.classList.toggle('active', t === tab));
    document.querySelectorAll('.gallery-item').forEach(item => item.hidden = tab.dataset.filter !== 'all' && item.dataset.category !== tab.dataset.filter);
  }));
})();
