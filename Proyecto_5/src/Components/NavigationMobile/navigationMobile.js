import './navigationMobile.css';
import { cartCountItems } from '../../Utils/cartCountItems';

export const navigationMobile = () => {

    const nav = document.createElement('nav');
    nav.className = 'navMobile';
    nav.innerHTML = `
            <ul>
                <li class="home"><a href="#home"></a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li id="cart" class="cartIcon-container">
                    <img src="./shopping-bag.svg" alt"shopping bag" class"shoppingBag">
                    <span id="cart-count2"></span>
            </ul>`
    
    document.body.appendChild(nav);

    const cartCountElement = document.getElementById('cart-count2');
  
    let cartCount2 = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
    cartCountElement.textContent = cartCount2;

    cartCountItems(cartCount2, cartCountElement);
};

