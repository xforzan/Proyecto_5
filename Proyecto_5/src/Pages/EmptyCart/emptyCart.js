import "./emptyCart.css";

import { cleanPage } from "../../Utils/cleanPage";
import { scrollToTop } from "../../Utils/scrollToTop";

export const emptyCart = () => {
    document.title = "Carrito vacío";
    cleanPage("main");
    scrollToTop();
    
    const emptyCartContainer = document.createElement("div");
    emptyCartContainer.classList.add("emptyCart-container");
    emptyCartContainer.innerHTML = `
        <h1>Carrito</h1>
        <img src="./emptyCart.svg" alt="empty cart" id="emptyCart">
        <h2>El carrito está vacío</h2>
        <button id="backToProducts">Volver a productos</button>
    `;
    
    const backToProducts = emptyCartContainer.querySelector("#backToProducts");
    backToProducts.addEventListener("click", () => {
        window.location.reload();
    });

    const main = document.querySelector("main");
    main.appendChild(emptyCartContainer);
}