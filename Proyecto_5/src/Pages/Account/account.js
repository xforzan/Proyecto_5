
import './account.css';

import { cleanPage } from '../../Utils/cleanPage';

export const account = () => {
cleanPage('main');

const accountContainer = document.createElement('div');
    accountContainer.classList.add('account-container');
    accountContainer.innerHTML = `
    <h1>Mi cuenta</h1>
    `;
    const main = document.querySelector('main');
    main.appendChild(accountContainer);
}

