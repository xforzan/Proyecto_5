
import './account.css';

import { cleanPage } from '../../Utils/cleanPage';
import { userStatus } from '../../Data/userStatus';
import { users } from '../../Data/users';
import { logOut } from '../../Utils/logOut';

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
        <p>${user.email}</p>
        <button id="logout">Cerrar sesión</button>
    </content>
    `;
    const main = document.querySelector('main');
    main.appendChild(accountContainer);

    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', () => {
        logOut();
        window.location.reload();
    });
}

