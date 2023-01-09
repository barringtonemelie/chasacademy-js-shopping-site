const shop = document.getElementById('shop');
let basket = JSON.parse(localStorage.getItem("data")) || [];
// Produktdatat finns i variabeln shopData (se data.js)
let cartAmount = document.getElementById("cartAmount"); 

const generateShop = () => {
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

generateShop()

const increment = (id) => {
    // Om användaren klickar på + på produkten 
    let quantityDiv = document.getElementById(`quantity-${id}`); 
    let quantity = quantityDiv.innerText; 
    quantity++; 
    quantityDiv.innerText = quantity; 
    //Uppdaterar totala antalet produkter i kundvagnen
    let currentCartAmount = cartAmount.innerText; 
    currentCartAmount++; 
    cartAmount.innerText = currentCartAmount; 
}

const decrement = (id) => {
    // Om användaren klickar på - på produkten 
    let quantityDiv = document.getElementById(`quantity-${id}`); 
    let quantity = quantityDiv.innerText; 
    if (quantity > 0) {
        quantity--; 
        quantityDiv.innerText = quantity; 
        let currentCartAmount = cartAmount.innerText; 
        if (currentCartAmount > 0) {
            currentCartAmount--; 
            cartAmount.innerText = currentCartAmount; 
        }
    }
}
