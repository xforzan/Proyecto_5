import { cleanPage } from '../../Utils/cleanPage';
import './products.css';

export const products = () => {
    cleanPage('main');
    const productsContainer = document.createElement('div');
    productsContainer.innerHTML = `
    <h1>Products</h1>
    `;
    const main = document.querySelector('main');
    main.appendChild(productsContainer);
}
