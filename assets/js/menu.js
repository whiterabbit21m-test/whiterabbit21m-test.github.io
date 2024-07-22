document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const body = document.body;

  menuToggle.addEventListener('click', function() {
    body.classList.toggle('menu-open');
  });

  // Chiudi il menu quando si clicca su un link
  const mainNav = document.getElementById('main-nav');
  mainNav.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link')) {
      body.classList.remove('menu-open');
    }
  });
});
