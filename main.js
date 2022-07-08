const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav-list');

ham.addEventListener('click', function () {

  ham.classList.toggle('menu-open');
  nav.classList.toggle('menu-open');

});

const targets = document.querySelectorAll('.scrollAnimation');

window.addEventListener('scroll', function() {
  const scroll = window.scrollY;
  const height = window.innerHeight;
  for(let target of targets) {
    const element = target.getBoundingClientRect().top + scroll;
    if (scroll > element - height) {
      target.classList.add('start-animation');
    }
  }

});