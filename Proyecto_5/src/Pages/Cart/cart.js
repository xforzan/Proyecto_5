import './cart.css';

import { cleanPage } from '../../Utils/cleanPage';

export const cart = () => {
cleanPage('main');

const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart-container');
    cartContainer.innerHTML = `
    <h1>Carrito de compras</h1>
    `;
    const main = document.querySelector('main');
    main.appendChild(cartContainer);
}

