console.log('\'Allo \'Allo!');

openMenu.addEventListener('click', function(e) {
  openMenu.classList.toggle('open');
  hamburger.classList.toggle('open');
  navOpen.classList.toggle('open');
  e.stopPropagation();
});
