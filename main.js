/*-------menu de la right---------*/

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

/*------menu de la izq--------*/
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

/*-------evento de click--------*/
menuEmail.addEventListener("click", toggleDesktopMenu);

menuHamIcon.addEventListener("click", toggleMobileMenu);




/* func para que aparezca el menu de la right*/

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
}


/* func para que aparezca el menu de la izq*/
function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
}