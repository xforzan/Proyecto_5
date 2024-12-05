import './cart.css';
import { cleanPage } from '../../Utils/cleanPage';
import { cart } from '../../Data/cart';
import { productsList } from '../../Data/productsList';
import { checkout } from '../../Pages/Checkout/checkout';
import { toCheckout } from '../../Data/toCheckout';

export const cartPage = () => {
    cleanPage('main');

    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart-container');

    if (cart.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'El carrito está vacío';
        cartContainer.appendChild(emptyMessage);
    } else {
        let total = 0;

        for (const cartItem of cart) {
            const quantity = cartItem.quantity;
            const productId = cartItem.id;
            const product = productsList.find(p => p.id === productId);
            total += product.price * quantity;

            const productItem = document.createElement('li');

            productItem.innerHTML = ` 
              <div class="productInfo">
                <img src="${product.image}" alt="${product.name}">
                <div class="productDetails">
                  <strong>${product.name}</strong>
                  <span>Cantidad: 
                    <button class="decrement-btn">-</button>
                    ${quantity}
                    <button class="increment-btn">+</button>
                  </span>
                  Precio: ${product.price}
                  <button class="remove-btn">Eliminar</button>
                </div>
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
                    alert('No hay suficiente stock disponible');
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

        const totalElement = document.createElement('p');
        totalElement.textContent = `Total: ${total}`;
        cartContainer.appendChild(totalElement);

        const checkoutButton = document.createElement('button');
        checkoutButton.textContent = 'Checkout';
        checkoutButton.classList.add('checkout-btn');
        checkoutButton.addEventListener('click', () => {
            alert('Yendo a hacer el pago');
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