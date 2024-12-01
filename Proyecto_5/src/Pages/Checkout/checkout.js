
import './checkout.css';

import { cleanPage } from '../../Utils/cleanPage';
import { productsList } from '../../Data/productsList';
import { coupons } from '../../Data/coupons';
import { scrollToTop } from '../../Utils/scrollToTop';
import { paymentSuccess } from '../PaymentSuccess/paymentSuccess';

export const checkout = (productId) => {
cleanPage('main');
scrollToTop();

const product = productsList.find(p => p.id === productId);
console.log(product);


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
    <div><input type="text" id="coupon" name="coupon" placeholder="Cupón">
    <button class="applyCoupon" id="apply-coupon">Aplicar</button></div>
</div>

<div class="details">
<div class="subtotal">
<p>Subtotal:</p> 
<span id="subtotal">${product.price}</span>
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
<span id="total">${(product.price + 3.99)}</span>
</div>
            
        </div>
        <button class="checkoutButton" id="checkoutButton">Pagar</button>
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
        paymentSuccess(total);
        console.log("checkout",parseInt(total));
    });
































   
}