const text = document.querySelector('.text');

const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');
const menuNav = document.querySelector('.menuNav');

const menuNav1 = document.querySelector('#menuNav1');
const menuNav2 = document.querySelector('#menuNav2');
// const menuNav3 = document.querySelector('#menuNav3');

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
// const img3 = document.querySelector('.img3');

let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuNav.style.display = 'flex';
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    text.classList.add('menuOpenStyles');
    closeIcon.classList.add('menuOpenStyles');
  } else {
    menuNav.style.display = 'none';
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    text.classList.remove('menuOpenStyles');
  }
}

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);

menuNav1.addEventListener('mouseenter', function () {
    img1.style.display = 'block';
});
menuNav1.addEventListener('mouseleave', function () {
    img1.style.display = 'none';
});

menuNav2.addEventListener('mouseenter', function () {
    img2.style.display = 'block';
});
menuNav2.addEventListener('mouseleave', function () {
    img2.style.display = 'none';
});