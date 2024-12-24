import './cart.css';
import { cleanPage } from '../../Utils/cleanPage';
import { cart } from '../../Data/cart';
import { checkout } from '../../Pages/Checkout/checkout';
import { toCheckout } from '../../Data/toCheckout';
import { alert } from '../../Utils/alert';
import { scrollToTop } from '../../Utils/scrollToTop';
import { listProducts } from '../../main';
import { emptyCart } from '../EmptyCart/emptyCart';


export const cartPage = () => {
    cleanPage('main');
    scrollToTop();

    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart-container');

    if (cart.length === 0) {
        emptyCart();
        localStorage.removeItem('cartCount');
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = 0;
        const cartCountElementMobile = document.getElementById('cart-count2');
        cartCountElementMobile.textContent = 0;
    } else {
        let total = 0;

        for (const cartItem of cart) {
            const quantity = cartItem.quantity;
            const productId = cartItem.id;
            const product = listProducts.find(p => p.id === productId);
            total += product.price * quantity;

            const productItem = document.createElement('li');

            productItem.innerHTML = ` 
              <div class="productInformation">
              <div class="productCartDetails">
                <img class="cartImg" src="${product.image}" alt="${product.name}">
                <div class="productInf">
                  <strong>${product.shortName}</strong>
                  <div class="cartQuantity">
                  <button class="decrement-btn add">-</button>
                    ${quantity}
                    <button class="increment-btn add">+</button>
                  </div>
                  </span>
                  Precio: ${product.price}€
                </div>
                </div>
                <button class="remove-btn add">X</button>
              </div>
            `;

            const incrementBtn = productItem.querySelector('.increment-btn');
            const decrementBtn = productItem.querySelector('.decrement-btn');
            const removeBtn = productItem.querySelector('.remove-btn');

            incrementBtn.addEventListener('click', () => {
                if (cartItem.quantity < product.quantity) {
                    cartItem.quantity++;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    cartPage();
                } else {
                    alert('error', '¡Ups!', 'No hay stock de este producto');
                }
            });

            decrementBtn.addEventListener('click', () => {
                if (cartItem.quantity > 1) {
                    cartItem.quantity--;
                } else {
                    const index = cart.indexOf(cartItem);
                    if (index > -1) {
                        cart.splice(index, 1);
                    }
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                cartPage();
            });

            removeBtn.addEventListener('click', () => {
                const index = cart.indexOf(cartItem);
                if (index > -1) {
                    cart.splice(index, 1);
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                cartPage();
            });

            cartContainer.appendChild(productItem);
        }

        const summary = document.createElement('div');
        const totalElement = document.createElement('p');
        totalElement.textContent = `A pagar:`;
        const totalAmount = document.createElement('span');
        totalAmount.textContent = `${total}€`;
        summary.classList.add('cartSummary');
        summary.appendChild(totalElement);
        summary.appendChild(totalAmount);
        cartContainer.appendChild(summary);

        const checkoutButton = document.createElement('button');
        checkoutButton.textContent = 'Checkout';
        checkoutButton.classList.add('checkout-btn');
        checkoutButton.addEventListener('click', () => {
            toCheckout.length = 0;
            cart.forEach(item => {
                for (let i = 0; i < item.quantity; i++) {
                    toCheckout.push(item.id);
                }
            });
            checkout(toCheckout);
        });
        cartContainer.appendChild(checkoutButton);
    }

    const main = document.querySelector('main');
    main.appendChild(cartContainer);
};