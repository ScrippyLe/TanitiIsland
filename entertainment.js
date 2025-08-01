const text = document.querySelector('.text');

const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');
const menuNav = document.querySelector('.menuNav');

const menuNav1 = document.querySelector('#menuNav1');
const menuNav2 = document.querySelector('#menuNav2');
const menuNav3 = document.querySelector('#menuNav3');
const menuNav4 = document.querySelector('#menuNav4');
const menuNav5 = document.querySelector('#menuNav5');
// const menuNav6 = document.querySelector('#menuNav6');

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');
const img6 = document.querySelector('.img6');

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

menuNav3.addEventListener('mouseenter', function () {
    img3.style.display = 'block';
});
menuNav3.addEventListener('mouseleave', function () {
    img3.style.display = 'none';
});
menuNav4.addEventListener('mouseenter', function () {
    img4.style.display = 'block';
});
menuNav4.addEventListener('mouseleave', function () {
    img4.style.display = 'none';
});
menuNav5.addEventListener('mouseenter', function () {
    img5.style.display = 'block';
});
menuNav5.addEventListener('mouseleave', function () {
    img5.style.display = 'none';
});
menuNav6.addEventListener('mouseenter', function () {
    img6.style.display = 'block';
});
menuNav6.addEventListener('mouseleave', function () {
    img6.style.display = 'none';
});