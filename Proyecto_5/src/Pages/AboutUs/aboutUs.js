
import './aboutUs.css';
import { cleanPage } from '../../Utils/cleanPage';
import { scrollToTop } from '../../Utils/scrollToTop';

export const aboutUs = () => {
    document.title = 'Sobre Nosotros';
    cleanPage('main');
    scrollToTop();
    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.classList.add('aboutUs-container');
    aboutUsContainer.innerHTML = `
        <h1>Sobre Nosotros</h1>
        <section id="aboutUsText">
            <p>En nuestra tienda online encontrarás una amplia selección de productos de electrónica, informática y tecnología. 
            Nuestro objetivo es ofrecerte los mejores productos a los mejores precios. 
            Trabajamos con las mejores marcas y proveedores para garantizar la calidad de nuestros productos. 
            Si tienes alguna duda o consulta, no dudes en ponerte en contacto con nosotros a través de nuestro formulario de contacto. 
            Estaremos encantados de atenderte.</p>
        </section>
    `;
    const main = document.querySelector('main');
    main.appendChild(aboutUsContainer);
};