import './products.css';
import { cleanPage } from '../../Utils/cleanPage';
import { productsList } from '../../Data/productsList';
import { checkout } from '../../Pages/Checkout/checkout';
import { cart } from '../../Data/cart';
import { toCheckout } from '../../Data/toCheckout';
import { filtersListener } from '../../Utils/filtersListener';
import { alert } from '../../Utils/alert';


export const products = () => {
    cleanPage('main');
    
    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products-container');

    const productsFilters = document.createElement('section');
    productsFilters.classList.add('filters');
    

    productsFilters.innerHTML = `
        <nav>
          <select name="capacidad" id="capacidad">
          <option value="default">capacidad</option>
          </select>
          
          <select name="marca" id="marca">
          <option value="default">marca</option>
          </select>

          <select name="ordenar por" id="ordenarPor">
          <option value="default">ordenar por</option>
          </select>

          <select name="color" id="color">
          <option value="default">color</option>
          </select>
        </nav>`;
    for (const product of productsList) {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}€</p>
            <button class="productButton" id="buy-button-${product.id}">Comprar</button>
            <button class="productButton add" id="add-to-cart-${product.id}">Agregar al carrito</button>
        `;
        productsContainer.appendChild(productElement);
        

        const checkoutButton = productElement.querySelector(`#buy-button-${product.id}`);
        checkoutButton.addEventListener('click', () => {
            if (product.quantity === 0) {
                alert('error','¡Ups!', 'No hay stock de este producto');
                return;
            }
            toCheckout.length = 0;
            toCheckout.push(product.id);
            checkout(toCheckout);
        });
        

        const addToCartButton = productElement.querySelector(`#add-to-cart-${product.id}`);
addToCartButton.addEventListener('click', () => {
    const productQuantity = productsList.find(item => item.id === product.id).quantity;

    if (productQuantity === 0) {
        alert('error','¡Ups!', 'No hay stock de este producto');
        return;
    }

    const cartItem = cart.find(item => item.id === product.id);
    if (cartItem) {
        if (cartItem.quantity >= productQuantity) {
              alert('error','¡Ups!', 'No hay stock de este producto');
            return;
        }
        cartItem.quantity++;
    } else {
        cart.push({id: product.id, quantity: 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
});

const main = document.querySelector('main');
main.appendChild(productsFilters);
main.appendChild(productsContainer);
    }
    filtersListener();
}

