import './cart.css';
import { cleanPage } from '../../Utils/cleanPage';

export const cart = () => {
    cleanPage('main');

    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart-container');
    cartContainer.innerHTML = `
        <h1>Carrito de compras</h1>
        <div class="cart-items">
            <!-- Aquí se añadirán los productos del carrito -->
        </div>
        <div class="cart-summary">
            <h2>Resumen del pedido</h2>
            <p>Total: $<span id="cart-total">0.00</span></p>
            <button id="checkout-button">Proceder al pago</button>
        </div>
    `;

    const main = document.querySelector('main');
    main.appendChild(cartContainer);
};