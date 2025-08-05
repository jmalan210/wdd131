const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const mainnavTwo = document.querySelector('.portfolionav');
const hambuttonTwo = document.querySelector('#menu2');

hambuttonTwo.addEventListener('click', () => {
    mainnavTwo.classList.toggle('open');
    hambuttonTwo.classList.toggle('open');
});


