const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav-list');

ham.addEventListener('click', function () {

  ham.classList.toggle('menu-open');
  nav.classList.toggle('menu-open');

});