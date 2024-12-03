
import './account.css';

import { cleanPage } from '../../Utils/cleanPage';
import { userStatus } from '../../Data/userStatus';
import { users } from '../../Data/users';

export const account = () => {
cleanPage('main');

const user = users.find(u => u.id === userStatus.id);

const accountContainer = document.createElement('div');
    accountContainer.classList.add('account-container');
    accountContainer.innerHTML = `
    <h1>Mi cuenta</h1>
    <content class="userDetails">
        <img src="${user.avatar}" alt="avatar"">
        <h2>¡Hola de vuelta ${user.name}!!!</h2>
    </content>
    `;
    const main = document.querySelector('main');
    main.appendChild(accountContainer);
}

