const text = document.querySelector('.text');

const menuIcon = document.querySelector('.menuIcon');
const menuNav = document.querySelector('.menuNav');

const menuNav1 = document.querySelector('#menuNav1');
const menuNav2 = document.querySelector('#menuNav2');
const menuNav3 = document.querySelector('#menuNav3');

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');

let menuOpen = false;

menuIcon.addEventListener('click', function () {
    menuOpen = !menuOpen;
    if (menuOpen) {
        menuNav.style.display = 'flex';
        menuIcon.classList.add('menuOpenStyles');
        text.classList.add('menuOpenStyles');
    } else {
        menuNav.style.display = 'none';
        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'none';
        menuIcon.classList.remove('menuOpenStyles');
        text.classList.remove('menuOpenStyles');
    }
});

// menuIcon.addEventListener('mouseenter', function () {
//         menuNav.style.display = 'flex';
//         menuIcon.classList.add('menuOpenStyles');
//         text.classList.add('menuOpenStyles');
// });
// menuIcon.addEventListener('mouseleave', function () {
//         menuNav.style.display = 'none';
//         img1.style.display = 'none';
//         img2.style.display = 'none';
//         img3.style.display = 'none';
//         menuIcon.classList.remove('menuOpenStyles');
//         text.classList.remove('menuOpenStyles');
// });





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



