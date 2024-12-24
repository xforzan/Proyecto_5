import "./emptyCart.css";

import { cleanPage } from "../../Utils/cleanPage";
import { scrollToTop } from "../../Utils/scrollToTop";

export const emptyCart = () => {
    cleanPage("main");
    scrollToTop();
    
    const emptyCartContainer = document.createElement("div");
    emptyCartContainer.classList.add("emptyCart-container");
    emptyCartContainer.innerHTML = `
        <h1>Carrito</h1>
        <img src="./emptyCart.svg" alt="empty cart" id="emptyCart">
        <h2>El carrito está vacío</h2>
    `;
    
    const main = document.querySelector("main");
    main.appendChild(emptyCartContainer);
}