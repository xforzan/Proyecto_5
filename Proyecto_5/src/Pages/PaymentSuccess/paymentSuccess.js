import './paymentSuccess.css';

import { cleanPage } from '../../Utils/cleanPage';
import { scrollToTop } from '../../Utils/scrollToTop';
import { userStatus } from '../../Data/userStatus';
import { users } from '../../Data/users';
import { cart } from '../../Data/cart';
import { products } from '../Products/products';
import { listProducts } from '../../main';

export const paymentSuccess = (total,name, toCheckout) => {
    document.title = 'Pago exitoso';
    cleanPage('main');
    scrollToTop();

    const paymentContainer = document.createElement('div');
    paymentContainer.classList.add('payment-container');
    paymentContainer.innerHTML = `
        <section class="payment-success">
            <dotlottie-player class="tick" src="https://lottie.host/57a3ea92-9961-4c1c-97b4-0090969214c8/77g9pkbfgP.lottie" background="transparent" speed="1" style="width: 300px; height: 300px"  autoplay></dotlottie-player>
            <h1>¡Pago Exitoso!</h1>
            <h2>${total}€</h2>
            <hr class="separation">
            <div class="payment-success-details">
              <div class="refNumber">
                <p>Número de referencia:</p>
                <span>${Math.floor(Math.random() * 100000)}</span>
              </div>

              <div class="paymentTime">
               <p>Fecha y hora de pago:</p>
               <span>${new Date().toLocaleString()}</span>
              </div>

              <div class="paymentMthd">
               <p>Método de pago:</p>
               <span>Tarjeta de crédito</span>
              </div>

              <div class="senderName">
               <p>Nombre del remitente:</p>
               <span>${name}</span>
              </div>

            </div>
        </section>
        <section class="thanks">
        <img src="/successPicture.svg" alt="Success Picture">
        <p>¡Gracias por comprar! ¿Quieres continuar comprando?</p>
            <button id="back-button">Volver a comprar</button>
        </section>
    `;
    const main = document.querySelector('main');
    main.appendChild(paymentContainer);


    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
        products();
        location.reload();
    });




    if (userStatus.logged === true){

        const productCount = [];

        toCheckout.forEach(productId => {
            const existingProduct = productCount.find(item => item.productId === productId);
            
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                productCount.push({ productId: productId, quantity: 1 });
            }
        });



        const user = users.find(u => u.id === userStatus.id);
        productCount.forEach(product => {
            if (user.boughtProducts.find(p => p.id === product.productId)) {
                const boughtProduct = user.boughtProducts.find(p => p.id === product.productId);
                boughtProduct.quantity += product.quantity;
            } else {
                user.boughtProducts.push({id: product.productId, quantity: product.quantity});
            }

            localStorage.setItem('users', JSON.stringify(users));

            listProducts.forEach(p => {
                const product = productCount.find(item => item.productId === p.id);
                if (product) {
                    p.quantity -= product.quantity;
                }
            });
            
        });
    }

    const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = 0;
        const cartCountElementMobile = document.getElementById('cart-count2');
        cartCountElementMobile.textContent = 0;


    localStorage.setItem('productsList', JSON.stringify(listProducts));



    cart.length = 0;
    localStorage.removeItem('cartCount');
    localStorage.removeItem('cart');
}