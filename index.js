const navbar = document.querySelector('nav');
const openMenu = document.getElementById('menu-button');
const closeMenu = document.getElementById('menu-close');
const container = document.querySelector('body');

openMenu.addEventListener("click", () => {
    navbar.classList.add("open");
    container.classList.toggle('menu-open');
});

closeMenu.addEventListener("click", () => {
    navbar.classList.remove("open");
    container.classList.remove('menu-open');
});