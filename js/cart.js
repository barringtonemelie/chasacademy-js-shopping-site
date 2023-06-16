let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];


// Produktdatat finns i variabeln shopData (se data.js)

//Använd localstorage för att komma åt vad som klickats på  

const generateCartItems = (item) => {
    // Generera alla produkter med dynamisk HTML och Array.protype.map() samt join()
    //
    // Använd denna markup för varje produktkort - den korresponderar mot CSS:en
    //

    //Steg 1 - utgå ifrån vilka saker som ligger i LocalStorage
    //Steg 2 - hitta motsvarande produkt i shopData
    //Steg 3 - Generera de produkter som har samma id 

    if (basket.length != 0) {
        let indices = []; 
        basket.forEach(item => {
            const i = shopData.findIndex(product => product.id === item.productId); 
            indices.push(i); 
        });
        console.log(indices); 
    }
    else {
        console.log("No items in basket"); 
    }

}

function createItem(item) {
    return `
    <div class="cart-item">
    <img width="100" src=${item.image} alt="store item" />
    <div class="details">
        <div class="title-price-x">
        <h4 class="title-price">
            <p>${item.title}</p>
            <p class="cart-item-price"> ${item.price}</p>
        </h4>
        <i onclick="removeItem(${item.id})" class="bi bi-x-lg"></i>
        </div>
        <div class="cart-buttons">
        <div class="buttons">
            <i onclick="decrement(${item.id})" class="bi bi-dash-lg"></i>
            <div id=${item.id} class="quantity">{--total--}</div>
            <i onclick="increment({--id--})" class="bi bi-plus-lg"></i>
        </div>
        </div>
        <h3> {--total * price--}</h3>
    </div>
    </div>
    `; 
}

generateCartItems();
