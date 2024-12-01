import './products.css';
import { cleanPage } from '../../Utils/cleanPage';
import { productsList } from '../../Data/productsList';
import { checkout } from '../../Pages/Checkout/checkout';
import { cart } from '../../Data/cart';

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
            <button class="productButton add" id="add-to-cart-${product.id}">Agregar al carrito</button>
        `;
        productsContainer.appendChild(productElement);
        

        const checkoutButton = productElement.querySelector(`#buy-button-${product.id}`);
        checkoutButton.addEventListener('click', () => {
            checkout(product.id);  
        });
        

        const addToCartButton = productElement.querySelector(`#add-to-cart-${product.id}`);
        addToCartButton.addEventListener('click', () => {
        
        const productQuantity = productsList.find(item => item.id === product.id).quantity;

        console.log("Mi producto tiene la cantidad de",productQuantity);

        const cartItem = cart.find(item => item.id === product.id);
        if (cartItem) {
            if (cartItem.quantity >= productQuantity) {
                alert('No hay suficiente stock');
                return;
            }
            cartItem.quantity++;
        } else {

        cart.push({id: product.id, quantity: 1});
        }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
        });
    }
    
    const main = document.querySelector('main');
    main.appendChild(productsContainer);
}