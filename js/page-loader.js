(function () {
  const loaderMarkup = [
    '<div class="page-loader" id="pageLoader" aria-hidden="true">',
    '<div class="page-loader__inner">',
    '<div class="page-loader__mark">',
    '<div class="page-loader__core"><span>AD</span></div>',
    '</div>',
    '<div class="page-loader__text">',
    '<div class="page-loader__title">Aqeeq Decor</div>',
    '<div class="page-loader__subtitle">Crafting elegant spaces</div>',
    '</div>',
    '<div class="page-loader__bar"><span></span></div>',
    '</div>',
    '</div>'
  ].join('');

  const initPageLoader = () => {
    if (!document.body) return;

    let loader = document.getElementById('pageLoader');
    if (!loader) {
      document.body.insertAdjacentHTML('afterbegin', loaderMarkup);
      loader = document.getElementById('pageLoader');
    }

    if (!loader) return;

    document.body.classList.add('is-loading');

    let isHidden = false;
    const hideLoader = () => {
      if (isHidden) return;
      isHidden = true;
      loader.classList.add('is-hidden');
      document.body.classList.remove('is-loading');

      window.setTimeout(() => {
        if (loader && loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 520);
    };

    if (document.readyState === 'complete') {
      window.setTimeout(hideLoader, 320);
    } else {
      window.addEventListener('load', () => {
        window.setTimeout(hideLoader, 320);
      }, { once: true });
    }

    window.setTimeout(hideLoader, 2600);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPageLoader, { once: true });
  } else {
    initPageLoader();
  }
})();
