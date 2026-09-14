// IMMORTAL-S3 web flasher QoL helpers.
(function () {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  customElements.whenDefined('esp-web-install-button').then(() => {
    document.querySelectorAll('esp-web-install-button').forEach((btn) => {
      btn.addEventListener('state-changed', (e) => {
        console.log('[IMMORTAL-S3 flasher]', e.detail || '');
      });
    });
  });
})();
