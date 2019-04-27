var opener = document.querySelector('.burger-nav__opener');
var items = document.querySelector('.burger-nav__items');

function toggleBurger() {
    opener.classList.toggle('open');
    items.classList.toggle('open');
}

opener.addEventListener('click', toggleBurger);