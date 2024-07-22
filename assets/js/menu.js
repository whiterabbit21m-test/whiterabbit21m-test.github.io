document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const body = document.body;
  const mainNav = document.getElementById('main-nav');

  // Funzione per aprire il menu
  function openMenu() {
    body.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
  }

  // Funzione per chiudere il menu
  function closeMenu() {
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  // Toggle del menu quando si clicca sul bottone
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    if (body.classList.contains('menu-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Chiudi il menu quando si clicca su un link
  mainNav.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link')) {
      closeMenu();
    }
  });

  // Chiudi il menu quando si clicca fuori da esso
  document.addEventListener('click', function(e) {
    if (body.classList.contains('menu-open') && !mainNav.contains(e.target) && e.target !== menuToggle) {
      closeMenu();
    }
  });

  // Gestione della navigazione con tastiera
  mainNav.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // Impedisci la propagazione del click all'interno del menu
  mainNav.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  // Gestione dello scroll
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Scrolling verso il basso
      body.classList.add('scroll-down');
      body.classList.remove('scroll-up');
    } else {
      // Scrolling verso l'alto
      body.classList.add('scroll-up');
      body.classList.remove('scroll-down');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, false);

  // Aggiorna l'attributo aria-expanded iniziale
  menuToggle.setAttribute('aria-expanded', 'false');
});
