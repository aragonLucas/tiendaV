/*-------menu de la right---------*/

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

/*------menu de la izq--------*/
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

/*menu carrito*/
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")

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
    
const productList = [] ;

productList.push ({
    name: "bike",
    price: "120",
    image: './foto/pexels-photo-bici.jpeg',
});

productList.push ({
    name: "pantalla",
    price: "220",
    image: "./foto/pexels-photo-bici.jpeg",
});

productList.push ({
    name: "computer",
    price: "620",
    image: "./foto/pexels-photo-bici.jpeg",
});


/* <section class="main-container">

        <div class="cards-container">
    
            <div class="product-card">
                <img src="./foto/pexels-photo-bici.jpeg" alt="">
                <div class="produc-info">
                    <div>
                        <p>$120.00</p>
                        <p>Bike</p>
                    </div>
                    
                    <figure>
                        <img src="./icon/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>   
    
        </div>
        */
        function renderProducts(arr) {
for (product of arr){
   const productCard = document.createElement("div");
   productCard.classList.add("product-card");

   //product= {name, price, image} -> product.image
   const productImg = document.createElement("img");
   productImg.setAttribute("src", product.image);

   const productInfo = document.createElement("div");
   productInfo.classList.add("product-info");

   const productInfoDiv = document.createElement("div");

   const productPrice = document.createElement("p");
   productPrice.innerText = "$" + product.price;

   const productName = document.createElement("p");
   productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure = document.createElement("figure");
   const productImgCart = document.createElement ("img");
   productImgCart.setAttribute("src", "./icon/bt_add_to_cart.svg") ;

   productInfoFigure.appendChild(productImgCart);

   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);

   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard); 
   
}
}

renderProducts(productList);