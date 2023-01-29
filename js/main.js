const shop = document.getElementById('shop');
let basket = JSON.parse(localStorage.getItem("data")) || [];
// Produktdatat finns i variabeln shopData (se data.js)
let cartAmountDiv = document.getElementById("cartAmount"); 

generateShop();

if (basket.length != 0) {
    getCartAndProductAmounts(); 
}

function getCartAndProductAmounts() {
    let amount = 0;
    basket.forEach(product => {
        amount += product.productQuantity;
        const productQuantityDiv = document.getElementById(`quantity-${product.productId}`); 
        productQuantityDiv.innerText = product.productQuantity; 
    });
    cartAmountDiv.innerText = amount;
}


function generateShop() {
    // Generera alla produkter med dynamisk HTML och Array.protype.map() samt join()
    const shopItems = shopData.map(createShopItems); 
    let shopItemsJoined = shopItems.join(""); 
    shop.innerHTML = shopItemsJoined; 
}

function createShopItems (item) {
    return `
    <div id="product-id-${item.id}" class="item">
        <img width="220" src="${item.image}" alt="Store item"> 
        <div class="details">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="price-quantity">
                <h2>${item.price}:-</h2>
                <div class="buttons">
                    <i onclick="decrement(${item.id})" class="bi bi-dash-lg"></i>
                    <div id="" class="quantity">
                    </div>
                    <div id="quantity-${item.id}" class="quantity">0</div>
                    <i onclick="increment(${item.id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>`; 
}

const increment = (id) => {
    // Om användaren klickar på + på produkten 
    // Uppdaterar totala antalet produkter i kundvagnen i LocalStorage och sen i diven i index.html
    let quantityDiv = document.getElementById(`quantity-${id}`); 
    let quantity = 1; 
    const currentItem = basket.find(product => product.productId === id); 
    if  (currentItem != undefined) {
        quantity =  currentItem.productQuantity;    
        quantity++; 
        currentItem.productQuantity = quantity;
    }
    else {
        const objToAdd = {
            productId: id,
            productQuantity: quantity
        };
        basket.push(objToAdd); 
        localStorage.setItem("data", JSON.stringify(basket)); /* Denna uppdaterar även "data" om den redan finns */ 
    }
    
    
    quantityDiv.innerText = quantity; 
    let currentCartAmount = cartAmountDiv.innerText; 
    currentCartAmount++; 
    cartAmountDiv.innerText = currentCartAmount; 
    
    localStorage.setItem("data", JSON.stringify(basket));
}

const decrement = (id) => {
    // Om användaren klickar på - på produkten 
    let quantityDiv = document.getElementById(`quantity-${id}`); 

    //Uppdaterar totala antalet produkter i kundvagnen 
    console.log("Current basket: ", basket); 
    let quantity = quantityDiv.innerText; 
    if (quantity > 0) {
        quantity--; 
        quantityDiv.innerText = quantity; 

        const currentItemIndex = basket.findIndex(product => product.productId === id); 
        basket[currentItemIndex].productQuantity--;  
        localStorage.setItem("data", JSON.stringify(basket));

        let currentCartAmount = cartAmountDiv.innerText; 
        if (currentCartAmount > 0) {
            currentCartAmount--; 
            cartAmountDiv.innerText = currentCartAmount; 
        }
    }
}
