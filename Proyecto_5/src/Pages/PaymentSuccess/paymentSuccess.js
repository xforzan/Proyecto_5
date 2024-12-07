import './paymentSuccess.css';

import { cleanPage } from '../../Utils/cleanPage';
import { scrollToTop } from '../../Utils/scrollToTop';
import { userStatus } from '../../Data/userStatus';
import { users } from '../../Data/users';
import { cart } from '../../Data/cart';
import { productsList } from '../../Data/productsList';
import { products } from '../Products/products';

export const paymentSuccess = (total) => {
    console.log("success",total);
    cleanPage('main');
    scrollToTop();

    const paymentContainer = document.createElement('div');
    paymentContainer.classList.add('payment-container');
    paymentContainer.innerHTML = `
        <h1>¡Gracias por tu compra!</h1>
        <p>El total de tu compra fue de $${total}</p>
    `;
    const main = document.querySelector('main');
    main.appendChild(paymentContainer);





    if (userStatus.logged === true){
        const user = users.find(u => u.id === userStatus.id);
        cart.forEach(product => {
            if (user.boughtProducts.find(p => p.id === product.id)) {
                const boughtProduct = user.boughtProducts.find(p => p.id === product.id);
                boughtProduct.quantity += product.quantity;
            } else {
                user.boughtProducts.push({id: product.id, quantity: product.quantity});
            }

            localStorage.setItem('users', JSON.stringify(users));
            
        });
    }

    const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = 0;
        const cartCountElementMobile = document.getElementById('cart-count2');
        cartCountElementMobile.textContent = 0;


        productsList.forEach(product => {
            const cartProduct = cart.find(c => c.id === product.id);
            if (cartProduct) {
                product.quantity -= cartProduct.quantity;
            }
        });

    localStorage.setItem('productsList', JSON.stringify(productsList));



    cart.length = 0;
    localStorage.removeItem('cartCount');
    localStorage.removeItem('cart');
}