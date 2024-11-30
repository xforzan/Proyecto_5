
import './login.css';

import { cleanPage } from '../../Utils/cleanPage';

export const login = () => {
cleanPage('main');

const loginContainer = document.createElement('div');
    loginContainer.classList.add('login-container');
    loginContainer.innerHTML = `
    <h1>Iniciar sesión</h1>
    `;
    const main = document.querySelector('main');
    main.appendChild(loginContainer);
}
