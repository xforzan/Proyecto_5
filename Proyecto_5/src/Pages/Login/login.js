import './login.css';
import { cleanPage } from '../../Utils/cleanPage';
import { users } from '../../Data/users';
import { userStatus } from '../../Data/userStatus';
import { scrollToTop } from '../../Utils/scrollToTop';
import { alert } from '../../Utils/alert';

export const login = () => {
    document.title = 'Iniciar sesión';
    cleanPage('main');
    scrollToTop();

    const loginContainer = document.createElement('div');
    loginContainer.classList.add('login-container');
    loginContainer.innerHTML = `
        <h1 id="form-title">Iniciar sesión</h1>
        <form id="auth-form">

            <div id="login-form">
                <label for="login-email">Correo electrónico:</label>
                <input type="email" id="login-email" name="email" required>
                <label for="login-password">Contraseña:</label>
                <input type="password" id="login-password" name="password" required>
                <button type="submit" id="login-submit">Iniciar sesión</button>
            </div>


            <div id="register-form" style="display: none;">
                <label for="register-name">Nombre:</label>
                <input type="text" id="register-name" name="name" required>
                <label for="register-surname">Apellido:</label>
                <input type="text" id="register-surname" name="surname" required>
                <label for="register-address">Dirección:</label>
                <input type="text" id="register-address" name="address" required>
                <label for="register-postalCode">Código postal:</label>
                <input type="text" id="register-postalCode" name="postalCode" required>
                <label for="register-email">Correo electrónico:</label>
                <input type="email" id="register-email" name="email" required>
                <label for="register-password">Contraseña:</label>
                <input type="password" id="register-password" name="password" required>
                <label for="register-avatar">Avatar (opcional):</label>
                <input type="text" id="register-avatar" name="avatar" placeholder="URL de la imagen (opcional)">
                <button type="submit" id="register-submit">Registrarse</button>
            </div>
        </form>
        <button id="toggle-button">¿No tienes cuenta? Regístrate</button>
    `;


    document.querySelector('main').appendChild(loginContainer);


    const toggleButton = document.querySelector('#toggle-button');
    const loginForm = document.querySelector('#login-form');
    const registerForm = document.querySelector('#register-form');

    toggleButton.addEventListener('click', () => {

        if (loginForm.style.display === 'none') {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        } else {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        }


        if (toggleButton.textContent === '¿No tienes cuenta? Regístrate') {
            toggleButton.textContent = '¿Ya tienes una cuenta? Inicia sesión';
        } else {
            toggleButton.textContent = '¿No tienes cuenta? Regístrate';
        }
    });


    const registerSubmitButton = document.querySelector('#register-submit');

    registerSubmitButton.addEventListener('click', (b) => {
        b.preventDefault();


        const name = document.getElementById('register-name').value;
        const surname = document.getElementById('register-surname').value;
        const address = document.getElementById('register-address').value;
        const postalCode = document.getElementById('register-postalCode').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const avatar = document.getElementById('register-avatar').value || './account.png';  // Avatar opcional


        if (!name || !surname || !address || !postalCode || !email || !password) {
            alert('error', '¡Ups!', 'Por favor, completa todos los campos.');
            return;
        }


        const highestId = Math.max(...users.map(user => user.id), 0) + 1;


        const newUser = {
            id: highestId,
            name: name,
            surname: surname,
            country: '',
            city: '',
            province: '',
            address: address,
            postalCode: postalCode,
            email: email,
            password: password,
            avatar: avatar,
            boughtProducts: []
        };


        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        userStatus.id = highestId;
        userStatus.logged = true;
        localStorage.setItem('userStatus', JSON.stringify(userStatus));

        alert('success', 'Usuario registrado con éxito', undefined);
        location.reload();
    });


    const loginSubmitButton = document.querySelector('#login-submit');
    loginSubmitButton.addEventListener('click', (b) => {
        b.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            userStatus.id = user.id;
            userStatus.logged = true;
            localStorage.setItem('userStatus', JSON.stringify(userStatus));
            alert('success', 'Inicio de sesión exitoso', undefined);
            location.reload();
        } else {
            alert('error', 'Correo electrónico o contraseña incorrectos', 'Por favor, inténtalo de nuevo');
        }
    });
};
