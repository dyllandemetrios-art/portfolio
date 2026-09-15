(function () {
  var CLOSE_DELAY = 200;
  var closeTimer = null;
  var navItems = document.querySelectorAll('.nav-item');

  function getPanel(navItem) {
    var caret = navItem.querySelector('.nav-caret');
    return caret ? document.getElementById(caret.getAttribute('aria-controls')) : null;
  }

  function closeItem(navItem) {
    var caret = navItem.querySelector('.nav-caret');
    var panel = getPanel(navItem);
    navItem.classList.remove('is-open');
    if (caret) caret.setAttribute('aria-expanded', 'false');
    if (panel) panel.classList.remove('is-open');
  }

  function closeAllExcept(exceptItem) {
    navItems.forEach(function (item) {
      if (item !== exceptItem) closeItem(item);
    });
  }

  function openItem(navItem) {
    clearTimeout(closeTimer);
    closeAllExcept(navItem);
    var caret = navItem.querySelector('.nav-caret');
    var panel = getPanel(navItem);
    navItem.classList.add('is-open');
    if (caret) caret.setAttribute('aria-expanded', 'true');
    if (panel) panel.classList.add('is-open');
  }

  function scheduleClose(navItem) {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(function () {
      closeItem(navItem);
    }, CLOSE_DELAY);
  }

  function cancelClose() {
    clearTimeout(closeTimer);
  }

  navItems.forEach(function (navItem) {
    var caret = navItem.querySelector('.nav-caret');
    if (!caret) return;
    var panel = getPanel(navItem);

    // Souris : ouverture au survol, fermeture différée pour laisser
    // le temps de rejoindre le panneau sans qu'il se referme.
    navItem.addEventListener('mouseenter', function () { openItem(navItem); });
    navItem.addEventListener('mouseleave', function () { scheduleClose(navItem); });

    // Clavier / tactile : le caret reste cliquable indépendamment du survol.
    caret.addEventListener('click', function (e) {
      e.preventDefault();
      if (navItem.classList.contains('is-open')) {
        closeItem(navItem);
      } else {
        openItem(navItem);
      }
    });

    // Focus clavier (Tab) : ouvre en entrant, ferme seulement si le
    // focus quitte à la fois le déclencheur et le panneau.
    navItem.addEventListener('focusin', function () { openItem(navItem); });
    navItem.addEventListener('focusout', function (e) {
      if (!navItem.contains(e.relatedTarget) && !(panel && panel.contains(e.relatedTarget))) {
        closeItem(navItem);
      }
    });

    if (panel) {
      panel.addEventListener('mouseenter', cancelClose);
      panel.addEventListener('mouseleave', function () { scheduleClose(navItem); });
      panel.addEventListener('focusout', function (e) {
        if (!navItem.contains(e.relatedTarget) && !panel.contains(e.relatedTarget)) {
          closeItem(navItem);
        }
      });
    }
  });

  document.addEventListener('click', function (e) {
    navItems.forEach(function (navItem) {
      var panel = getPanel(navItem);
      if (!navItem.contains(e.target) && !(panel && panel.contains(e.target))) {
        closeItem(navItem);
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') navItems.forEach(closeItem);
  });
})();
