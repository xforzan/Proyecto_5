import './products.css';
import { cleanPage } from '../../Utils/cleanPage';
import { productsList } from '../../Data/productsList';


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
            <button class="productButton" id="add-to-cart">Agregar al carrito</button>
            <button class="productButton" id="remove-from-cart">Quitar del carrito</button>
        `;
        productsContainer.appendChild(productElement);
    }
    const main = document.querySelector('main');
    main.appendChild(productsContainer);
}
