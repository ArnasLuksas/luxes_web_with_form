//mobile menu
const burger = document.querySelector('.nav-burger');
const list = document.querySelector('.list');
var body = document.querySelector('body');

const toggleNav = () => {
  list.classList.toggle('open');
  const navIsOpen = list.classList.contains('open');
  if (navIsOpen) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'scroll';
  }
};
burger.addEventListener('click', toggleNav);
