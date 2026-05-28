const hamburgerMenu = document.querySelector('.hamburger-menu');
const offscreenMenu = document.querySelector('.offscreen-menu');

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    offscreenMenu.classList.toggle("active");
});

