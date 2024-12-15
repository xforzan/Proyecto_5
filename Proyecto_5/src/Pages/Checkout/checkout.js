import './checkout.css';

import { cleanPage } from '../../Utils/cleanPage';
import { productsList } from '../../Data/productsList';
import { coupons } from '../../Data/coupons';
import { scrollToTop } from '../../Utils/scrollToTop';
import { paymentSuccess } from '../PaymentSuccess/paymentSuccess';

export const checkout = (toCheckout) => {
    cleanPage('main');
    scrollToTop();


    const productCount = [];


    toCheckout.forEach(productId => {
        const existingProduct = productCount.find(item => item.productId === productId);
        
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            productCount.push({ productId: productId, quantity: 1 });
        }
    });


    const checkoutContainer = document.createElement('div');
    checkoutContainer.classList.add('checkout-container');


    checkoutContainer.innerHTML = `
    <section class="checkoutForm">
       <div class="personalInfo">
       <h3>Información personal</h3>
       <hr>
            <input type="text" placeholder="Nombre" id="name" name="name">
            <input type="email" placeholder="Correo electrónico" id="email" name="email">
            <input type="tel" placeholder="Número de teléfono"  id="phone" name="phone">
       </div>
       <div class="addressInfo">
         <h3>Dirección de envío</h3>
       <hr>
            <input type="text" placeholder="Dirección" id="address" name="address">
            <input type="text" placeholder="Ciudad" id="city" name="city">
            <input type="text" placeholder="Código postal" id="zip" name="zip">
            <input type="text" placeholder="País" id="country" name="country">
       </div>
       <div class="paymentInfo">
       <h3>Formulario de Pago</h3>
       <hr>
            <input type="text" id="cardName" name="cardName" placeholder="Nombre en la tarjeta" maxlength="50" required>
            <input type="text" id="cardNumber" name="cardNumber" placeholder="Número en la tarjeta" maxlength="16" required>
            <input type="text" id="expiryDate" name="expiryDate" placeholder="Expiración de la tarjeta" maxlength="5" required>
            <input type="text" id="cvv" name="cvv" placeholder="CVV"  maxlength="4" required>
       </div>    
    </section>
    <section class="checkoutSummary">
       <h2>Resumen de compra</h2>
        <hr>
    </section>
    `;


    const main = document.querySelector('main');
    main.appendChild(checkoutContainer);










    const checkoutSummary = document.querySelector('.checkoutSummary');
    let total = 0;


    productCount.forEach(item => {
        const product = productsList.find(p => p.id === item.productId);

        const productCheckout = document.createElement('div');
        productCheckout.classList.add('productCheckout');
        
        productCheckout.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" class="product-image">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}€</p>
            <p class="product-quantity">Cantidad: ${item.quantity}</p>
        </div>
        `;

        checkoutSummary.appendChild(productCheckout);
        total += product.price * item.quantity;
    });


    const couponSection = document.createElement('div');
    couponSection.classList.add('coupon');
    couponSection.innerHTML = `
    <label for="coupon">Código de descuento:</label>
    <div><input type="text" id="coupon" name="coupon" placeholder="Cupón">
    <button class="applyCoupon" id="apply-coupon">Aplicar</button></div>
    `;
    checkoutSummary.appendChild(couponSection);

    const detailsSection = document.createElement('div');
    detailsSection.classList.add('details');
    detailsSection.innerHTML = `
    <div class="subtotal">
        <p>Subtotal:</p> 
        <span id="subtotal">${total}</span>
    </div>
    <div class="shipping">
        <p>Envío:</p>
        <span id="shipping">3.99</span>
    </div>
    <div class="discount">
        <p>Descuento:</p>
        <span id="discount">0.00</span>
    </div>
    <hr>
    <div class="total">
        <p>Total:</p>
        <span id="total">${total + 3.99}</span>
    </div>
    `;
    checkoutSummary.appendChild(detailsSection);


    const checkoutButton = document.createElement('button');
    checkoutButton.classList.add('checkoutButton');
    checkoutButton.id = 'checkoutButton';
    checkoutButton.textContent = 'Pagar';
    checkoutSummary.appendChild(checkoutButton);


    const applyCouponButton = document.getElementById('apply-coupon');
    applyCouponButton.addEventListener('click', () => {
        const couponCode = document.getElementById('coupon').value;
        const coupon = coupons.find(c => c.code === couponCode);

        if (coupon) {
            const discount = coupon.discount;
            const shipping = 3.99;
            const totalWithDiscount = Math.max(0, total + shipping - discount);

            document.getElementById('subtotal').textContent = total;
            document.getElementById('discount').textContent = discount;
            document.getElementById('total').textContent = totalWithDiscount;
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              
              Toast.fire({
                icon: "success",
                title: "Cupon aplicado correctamente",
                customClass: {
                  popup: 'css-swal',
                }
              });

        } else {
            Swal.fire({
                title: '¡Cupón no válido!',
                text: 'Prueba con otro cupón',
                icon: 'error',
                confirmButtonText: 'Cerrar',
                customClass: {
                    popup: 'css-swal',
                  }
              })
        }
    });

    checkoutButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;

        if (!name || !email || !address || !phone) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        const total = parseFloat(document.getElementById('total').textContent);
        alert('Compra finalizada con éxito.');
        paymentSuccess(total, name);
    });
};
