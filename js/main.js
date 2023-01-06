const shop = document.getElementById('shop');
 
let basket = JSON.parse(localStorage.getItem("data")) || [];

// Produktdatat finns i variabeln shopData (se data.js)


const generateShop = () => {
    // Generera alla produkter med dynamisk HTML och Array.protype.map() samt join()
    //
    // Använd denna markup för varje produktkort - den korresponderar mot CSS:en
    //
    // <div id=product-id-{--id--} class="item">
    //     <img width="220" src={--url--} alt=""> 
    //     <div class="details">
    //         <h3>{--title-}</h3>
    //         <p>{--desription--}</p>
    //         <div class="price-quantity">
    //         <h2>{--price-)-</h2>
    //         <div class="buttons">
    //             <i onclick="decrement({--id--})" class="bi bi-dash-lg"></i>
    //             <div id={--id--} class="quantity">
    //             </div>
    //             <div id={--id--} class="quantity">???</div>
    //             <i onclick="increment({--id--})" class="bi bi-plus-lg"></i>
    //         </div>
    //         </div>
    //     </div>
    // </div>

}

generateShop()

const increment = (id) => {
    // Om användaren klickar på + på produkten 
}

const decrement = (id) => {
    // Om användaren klickar på - på produkten 
}
