import './paymentSuccess.css';

import { cleanPage } from '../../Utils/cleanPage';
import { scrollToTop } from '../../Utils/scrollToTop';

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
}