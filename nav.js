(function () {
  var carets = document.querySelectorAll('.nav-caret');
  var panels = document.querySelectorAll('.nav-dropdown-panel');

  function closeAll(exceptCaret) {
    carets.forEach(function (c) {
      if (c !== exceptCaret) {
        c.setAttribute('aria-expanded', 'false');
        c.closest('.nav-item').classList.remove('is-open');
      }
    });
    panels.forEach(function (p) {
      if (!exceptCaret || p.id !== exceptCaret.getAttribute('aria-controls')) {
        p.classList.remove('is-open');
      }
    });
  }

  carets.forEach(function (caret) {
    caret.addEventListener('click', function (e) {
      e.preventDefault();
      var panel = document.getElementById(caret.getAttribute('aria-controls'));
      var isOpen = caret.getAttribute('aria-expanded') === 'true';
      closeAll(isOpen ? null : caret);
      if (!isOpen) {
        caret.setAttribute('aria-expanded', 'true');
        caret.closest('.nav-item').classList.add('is-open');
        if (panel) panel.classList.add('is-open');
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item') && !e.target.closest('.nav-dropdown-panel')) {
      closeAll(null);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll(null);
  });
})();
