const text = document.querySelector('.text');

const menuIcon = document.querySelector('.menuIcon');
const menuNav = document.querySelector('.menuNav');

const rainforestNav = document.querySelector('#rainforestNav');
const beachesNav = document.querySelector('#beachesNav');
const volcanoNav = document.querySelector('#volcanoNav');

const flowerImg = document.querySelector('.flowerImg');
const flamingoImg = document.querySelector('.flamingoImg');
const volcanoImg = document.querySelector('.volcanoImg');

let menuOpen = false;

menuIcon.addEventListener('click', function () {
    menuOpen = !menuOpen;
    if (menuOpen) {
        menuNav.style.display = 'flex';
        menuIcon.classList.add('menuOpenStyles');
        text.classList.add('menuOpenStyles');
    } else {
        menuNav.style.display = 'none';
        flowerImg.style.display = 'none';
        flamingoImg.style.display = 'none';
        volcanoImg.style.display = 'none';
        menuIcon.classList.remove('menuOpenStyles');
        text.classList.remove('menuOpenStyles');
        // rainforestNav.classList.remove('activeNavStyles');
        // beachesNav.classList.remove('activeNavStyles');
        // volcanoNav.classList.remove('activeNavStyles');
    }
});

// Use getElementById for id selectors!

rainforestNav.addEventListener('mouseenter', function () {
    flowerImg.style.display = 'block'; // block works for an img tag
    // rainforestNav.classList.add('rainforestNavActive');
});
rainforestNav.addEventListener('mouseleave', function () {
    flowerImg.style.display = 'none';
    // rainforestNav.classList.remove('rainforestNavActive');
});

beachesNav.addEventListener('mouseenter', function () {
    flamingoImg.style.display = 'block'; // block works for an img tag
    // beachesNav.classList.add('rainforestNavActive');
});
beachesNav.addEventListener('mouseleave', function () {
    flamingoImg.style.display = 'none';
    // beachesNav.classList.remove('rainforestNavActive');
});

volcanoNav.addEventListener('mouseenter', function () {
    volcanoImg.style.display = 'block'; // block works for an img tag
    // volcanoNav.classList.add('rainforestNavActive');
});
volcanoNav.addEventListener('mouseleave', function () {
    volcanoImg.style.display = 'none';
    // volcanoNav.classList.remove('rainforestNavActive');
});




// rainforestNav.addEventListener('click', function () {
//     flowerImg.style.display = 'flex';
//     rainforestNav.classList.add('activeNavStyles');
//     beachesNav.classList.remove('activeNavStyles');
//     volcanoNav.classList.remove('activeNavStyles');
// })

// beachesNav.addEventListener('click', function () {
//     flowerImg.style.display = 'none';
//     flamingoImg.style.display = 'flex';
//     volcanoImg.style.display = 'none';

//     beachesNav.classList.add('activeNavStyles');
//     rainforestNav.classList.remove('activeNavStyles');
//     volcanoNav.classList.remove('activeNavStyles');
// })

// volcanoNav.addEventListener('click', function () {
//     flowerImg.style.display = 'none';
//     flamingoImg.style.display = 'none';
//     volcanoImg.style.display = 'flex';
//     volcanoNav.classList.add('activeNavStyles');
//     beachesNav.classList.remove('activeNavStyles');
//     rainforestNav.classList.remove('activeNavStyles');
// })



