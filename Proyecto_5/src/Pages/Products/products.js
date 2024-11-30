import './products.css';
import { cleanPage } from '../../Utils/cleanPage';
import { productsList } from '../../Data/productsList';
import { checkout } from '../../Pages/Checkout/checkout';

export const products = () => {
    cleanPage('main');
    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products-container');
    
    for (const product of productsList) {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price}</p>
            <button class="productButton" id="buy-button-${product.id}">Comprar</button>
            <button class="productButton" id="add-to-cart-${product.id}">Agregar al carrito</button>
        `;
        productsContainer.appendChild(productElement);
        

        const checkoutButton = productElement.querySelector(`#buy-button-${product.id}`);
        checkoutButton.addEventListener('click', () => {
            checkout(product.id);  
        });
        

        const addToCartButton = productElement.querySelector(`#add-to-cart-${product.id}`);
        addToCartButton.addEventListener('click', () => {
         
            console.log(`Producto ${product.name} agregado al carrito`);
        });
    }
    
    const main = document.querySelector('main');
    main.appendChild(productsContainer);
}