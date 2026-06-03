(function () {
  const sizeQuery = window.matchMedia('(max-width: 575px)');

  function ensureBackToTop() {
    let button = document.getElementById('back-to-top');

    if (!button) {
      button = document.createElement('div');
      button.id = 'back-to-top';
      button.innerHTML = '<a href="#" aria-label="Back to top"></a>';
      document.body.appendChild(button);
    }

    const link = button.querySelector('a');
    if (link) {
      link.setAttribute('href', '#');
      link.setAttribute('aria-label', 'Back to top');
    }

    return button;
  }

  function pinFloatingActions() {
    const size = sizeQuery.matches ? '54px' : '58px';
    const offset = sizeQuery.matches ? '16px' : '22px';
    const bottom = `calc(${offset} + env(safe-area-inset-bottom, 0px))`;
    const whatsapp = document.querySelector('.whatsapp-chat-button');
    const backToTop = ensureBackToTop();
    const backToTopLink = backToTop.querySelector('a');

    if (whatsapp) {
      whatsapp.style.setProperty('position', 'fixed', 'important');
      whatsapp.style.setProperty('left', offset, 'important');
      whatsapp.style.setProperty('right', 'auto', 'important');
      whatsapp.style.setProperty('bottom', bottom, 'important');
      whatsapp.style.setProperty('width', size, 'important');
      whatsapp.style.setProperty('height', size, 'important');
      whatsapp.style.setProperty('z-index', '2147483000', 'important');
      whatsapp.style.setProperty('opacity', '1', 'important');
      whatsapp.style.setProperty('visibility', 'visible', 'important');
    }

    backToTop.style.setProperty('position', 'fixed', 'important');
    backToTop.style.setProperty('left', 'auto', 'important');
    backToTop.style.setProperty('right', offset, 'important');
    backToTop.style.setProperty('bottom', bottom, 'important');
    backToTop.style.setProperty('width', size, 'important');
    backToTop.style.setProperty('height', size, 'important');
    backToTop.style.setProperty('display', 'block', 'important');
    backToTop.style.setProperty('opacity', '1', 'important');
    backToTop.style.setProperty('visibility', 'visible', 'important');
    backToTop.style.setProperty('z-index', '2147483000', 'important');

    if (backToTopLink) {
      backToTopLink.style.setProperty('width', size, 'important');
      backToTopLink.style.setProperty('height', size, 'important');
      backToTopLink.style.setProperty('display', 'inline-flex', 'important');
      backToTopLink.style.setProperty('align-items', 'center', 'important');
      backToTopLink.style.setProperty('justify-content', 'center', 'important');
      backToTopLink.style.setProperty('border-radius', '50%', 'important');
    }
  }

  document.addEventListener('DOMContentLoaded', pinFloatingActions);
  window.addEventListener('load', pinFloatingActions);
  window.addEventListener('resize', pinFloatingActions);
  window.addEventListener('scroll', pinFloatingActions, { passive: true });
  window.setTimeout(pinFloatingActions, 250);
  window.setTimeout(pinFloatingActions, 1000);
})();
