import './login.css';
import { cleanPage } from '../../Utils/cleanPage';

export const login = () => {
    cleanPage('main');

    const loginContainer = document.createElement('div');
    loginContainer.classList.add('login-container');
    loginContainer.innerHTML = `
        <h1 id="form-title">Iniciar sesión</h1>
        <form id="auth-form">
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
            <div id="register-fields" style="display: none;">
                <label for="confirm-password">Confirmar contraseña:</label>
                <input type="password" id="confirm-password" name="confirm-password" required>
            </div>
            <button type="submit" id="submit-button">Iniciar sesión</button>
        </form>
        <button id="toggle-button">¿No tienes una cuenta? Regístrate</button>
    `;

    const main = document.querySelector('main');
    main.appendChild(loginContainer);

    const formTitle = document.getElementById('form-title');
    const authForm = document.getElementById('auth-form');
    const registerFields = document.getElementById('register-fields');
    const submitButton = document.getElementById('submit-button');
    const toggleButton = document.getElementById('toggle-button');

    toggleButton.addEventListener('click', () => {
        if (registerFields.style.display === 'none') {
            registerFields.style.display = 'block';
            formTitle.textContent = 'Registrarse';
            submitButton.textContent = 'Registrarse';
            toggleButton.textContent = '¿Ya tienes una cuenta? Inicia sesión';
        } else {
            registerFields.style.display = 'none';
            formTitle.textContent = 'Iniciar sesión';
            submitButton.textContent = 'Iniciar sesión';
            toggleButton.textContent = '¿No tienes una cuenta? Regístrate';
        }
    });
};