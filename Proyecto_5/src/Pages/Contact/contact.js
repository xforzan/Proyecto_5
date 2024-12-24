import './contact.css';
import { cleanPage } from '../../Utils/cleanPage';
import { scrollToTop } from '../../Utils/scrollToTop';
import { alert } from '../../Utils/alert';

export const contact = () => {
    document.title = 'Contacto';
    cleanPage('main');
    scrollToTop();

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    contactContainer.innerHTML = `
        <h1>Contacto</h1>
        <section id="contactForm">
            <input type="text" id="name" name="name" placeholder="Nombre" required>
            <input type="email" id="email" name="email" placeholder="Correo electrónico" required>
            <input type="text" id="message" name="message" placeholder="Mensaje" required></textarea>
        </section>
        <button id="sendMessage">Enviar mensaje</button>
    `;

    const submit = contactContainer.querySelector('#sendMessage');

    submit.addEventListener('click', () => {
        let name = contactContainer.querySelector('#name').value;
        let email = contactContainer.querySelector('#email').value;
        let message = contactContainer.querySelector('#message').value;

        if (!name || !email || !message) {
            alert('error', 'Error', 'Por favor complete todos los campos.');
            return;
        } else {
            alert('filterSuccess', 'Mensaje enviado', 'Su mensaje ha sido enviado correctamente.');
            contactContainer.querySelector('#name').value = '';
            contactContainer.querySelector('#email').value = '';
            contactContainer.querySelector('#message').value ='';
        }
    });

    const main = document.querySelector('main');
    main.appendChild(contactContainer);
}
