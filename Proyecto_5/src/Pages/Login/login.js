import './login.css';
import { cleanPage } from '../../Utils/cleanPage';

export const login = () => {
    cleanPage('main');

    const loginContainer = document.createElement('div');
    loginContainer.classList.add('login-container');
    loginContainer.innerHTML = `
        <h1 id="form-title">Iniciar sesión</h1>
        <form id="auth-form">
            <div class="step" id="step-1">
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required>
                <button type="button" id="next-1">Siguiente</button>
            </div>
            <div class="step" id="step-2" style="display: none;">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
                <button type="button" id="prev-2">Anterior</button>
                <button type="button" id="next-2">Siguiente</button>
            </div>
            <div class="step" id="step-3" style="display: none;">
                <label for="confirm-password">Confirmar contraseña:</label>
                <input type="password" id="confirm-password" name="confirm-password" required>
                <button type="button" id="prev-3">Anterior</button>
                <button type="submit" id="submit-button">Registrarse</button>
            </div>
        </form>
        <button id="toggle-button">¿Ya tienes una cuenta? Inicia sesión</button>
    `;

    const main = document.querySelector('main');
    main.appendChild(loginContainer);

    const formTitle = document.getElementById('form-title');
    const authForm = document.getElementById('auth-form');
    const toggleButton = document.getElementById('toggle-button');

    const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    const showStep = (stepIndex) => {
        steps.forEach((step, index) => {
            step.style.display = index === stepIndex ? 'block' : 'none';
        });
    };

    document.getElementById('next-1').addEventListener('click', () => {
        currentStep = 1;
        showStep(currentStep);
    });

    document.getElementById('prev-2').addEventListener('click', () => {
        currentStep = 0;
        showStep(currentStep);
    });

    document.getElementById('next-2').addEventListener('click', () => {
        currentStep = 2;
        showStep(currentStep);
    });

    document.getElementById('prev-3').addEventListener('click', () => {
        currentStep = 1;
        showStep(currentStep);
    });

    toggleButton.addEventListener('click', () => {
        if (formTitle.innerText === 'Iniciar sesión') {
            formTitle.innerText = 'Registrarse';
            document.getElementById('submit-button').innerText = 'Registrarse';
            showStep(0);
        } else {
            formTitle.innerText = 'Iniciar sesión';
            document.getElementById('submit-button').innerText = 'Iniciar sesión';
            showStep(0);
        }
    });
};