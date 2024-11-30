import './footer.css';


export const footer = () => {
const footer = document.querySelector('footer');
footer.innerHTML = `
 <div class="sobre-nosotros">
            <img src="./Assets/Logo/Logo-White.svg" alt="logo">
            <p>Somos una tienda online especializada en tecnología, con productos de alta calidad. Te ofrecemos una experiencia de compra única, con servicio al cliente excepcional y entregas rápidas. Explora nuestras ofertas y descubre las últimas novedades.</p>
        </div>
        <ul>
            <li>Enlaces</li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Política de reembolso</a></li>
            <li><a href="#">Términos y condiciones</a></li>
        </ul>
        <ul>
            <li>Tienda</li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Descuentos</a></li>
            <li><a href="#">Envío</a></li>
            <li><a href="#">Ofertas</a></li>
        </ul>
        <ul>
            <li>Cuenta</li>
            <li><a href="#">Mi cuenta</a></li>
            <li><a href="#">Mis pedidos</a></li>
            <li><a href="#">Localizar paquete</a></li>
            <li><a href="#">Ayuda</a></li>
        </ul>
        <ul>
            <li>Redes sociales</li>
            <li class="tiktok"><a href="#">Tiktok</a></li>
            <li class="instagram"><a href="#">Instagram</a></li>
            <li class="facebook"><a href="#">Facebook</a></li>
            <li class="x"><a href="#">X</a></li>
        </ul>
        <div class="metodos-de-pago">
            <img src="./visa.svg" alt="Visa">
            <img src="./mastercard.svg" alt="Mastercard">
            <img src="./paypal.svg" alt="Paypal">
            <img src="./maestro.svg" alt="Maestro">
        </div>
        <p class="copyright"> Copyright © 2024 Tutienda. Todos los derechos reservados.</p>
`;

};
