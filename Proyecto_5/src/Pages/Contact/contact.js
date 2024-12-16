import './contact.css';
import { cleanPage } from '../../Utils/cleanPage';
import { scrollToTop } from '../../Utils/scrollToTop';
import { alert } from '../../Utils/alert';

export const contact = () => {
    cleanPage('main');
    scrollToTop();
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    contactContainer.innerHTML = `
        <h1>Contacto</h1>
        <form id="contactForm">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit" id="sendMessage">Enviar mensaje</button>
        </form>
    `;
    const form = contactContainer.querySelector('#contactForm');
    form.addEventListener('submit', (event) => {});
    const main = document.querySelector('main');
    main.appendChild(contactContainer);
}