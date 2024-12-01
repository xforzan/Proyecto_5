
import './checkout.css';

import { cleanPage } from '../../Utils/cleanPage';
import { productsList } from '../../Data/productsList';
import { coupons } from '../../Data/coupons';

export const checkout = (productId) => {
cleanPage('main');

const product = productsList.find(p => p.id === productId);
console.log(product);


const checkoutContainer = document.createElement('div');
    checkoutContainer.classList.add('checkout-container');
    checkoutContainer.innerHTML = `
    <section class="checkoutForm">
       <h1>Finalizar compra</h1>
         <form>
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name">
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email">
            <label for="address">Dirección:</label>
            <input type="text" id="address" name="address">
            <label for="phone">Teléfono:</label>
            <input type="tel" id="phone" name="phone">
    </section>
    <section class="checkoutSummary">
       <h2>Resumen de compra</h2>
       <div class="productCheckout">
            <div class="product-image">
            <img src="${product.image}" alt="${product.name}" class="product-image">
       </div>
       <div class="product-info">
           <h3 class="product-name">${product.name}</h3>
           <p class="product-price">$${product.price}</p>
        </div>
    </div>

<div class="coupon">
    <label for="coupon">Código de descuento:</label>
    <div><input type="text" id="coupon" name="coupon">
    <button class="applyCoupon" id="apply-coupon">Aplicar</button></div>
</div>

<div class="details">
            <p>Subtotal: $<span id="subtotal">${product.price}</span></p> 
            <hr>
            <p>Envío: $<span id="shipping">3.99</span></p>
            <hr>
            <p>Descuento: $<span id="discount">0.00</span></p>
            <hr>
            <p>Total: $<span id="total">${(product.price + 3.99)}</span></p>
        </div>
        <button class="checkoutButton" id="checkoutButton">Finalizar compra</button>
    `;

    const main = document.querySelector('main');
    main.appendChild(checkoutContainer);

    const applyCouponButton = document.getElementById('apply-coupon');
    applyCouponButton.addEventListener('click', () => {
        const couponCode = document.getElementById('coupon').value;
        const coupon = coupons.find(c => c.code === couponCode);

        if (coupon) {
            const discount = coupon.discount;
            const subtotal = product.price;
            const shipping = 3.99;
            const total = Math.max(0,subtotal + shipping - discount);

            document.getElementById('subtotal').textContent = subtotal;
            document.getElementById('discount').textContent = discount;
            document.getElementById('total').textContent = total;
            alert(`Cupón aplicado: ${discount} de descuento`);
        } else {
            alert('Cupón no válido');
        }

    });




    const checkoutButton = document.getElementById('checkoutButton');
    checkoutButton.addEventListener('click', () => {
        alert('Compra realizada con éxito');
    });

}