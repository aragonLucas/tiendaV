/*-------menu de la right---------*/

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

/*------menu de la izq--------*/
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

/*menu carrito*/
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

/*-------evento de click--------*/
menuEmail.addEventListener("click", toggleDesktopMenu);

menuHamIcon.addEventListener("click", toggleMobileMenu);

            /*menuCarrito*/
menuCarritoIcon.addEventListener ("click" , toggleCarritoAside);




/* func para que aparezca el menu de la right*/

function toggleDesktopMenu() {

    const isAsideClosed = aside.classList.contains("inactive")
    if(!isAsideClosed) {
        aside.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}


/* func para que aparezca el menu de la izq*/
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.toggle("inactive")
    if(!isAsideClosed){
        aside.classList.add("inactive")

    }
    mobileMenu.classList.toggle("inactive")

}

/*func para el menu carrito */
function toggleCarritoAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isAsideClosed = aside.classList.contains("inactive")

    if(!isMobileMenuClosed){
    mobileMenu.classList.add("inactive")
   }

   aside.classList.toggle("inactive")
}
    
