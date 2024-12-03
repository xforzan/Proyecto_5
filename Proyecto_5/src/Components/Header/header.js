import { cartCountItems } from '../../Utils/cartCountItems';
import './header.css';

export const header = () => {
  const header = document.querySelector('header');

  header.innerHTML = `
    <img src="https://i.ibb.co/7zvZwvL/logo.png" alt="logo" id="logo">
      <div class="searchBar">
        <span></span>
        <input id="searchBar" type="text" name="Search bar" placeholder="Search">
        </div>
    <nav class="headerNav">
  
        <ul>
            <li><a href="#">Productos</a></li>
            <li id="login"><a href="#">Iniciar Sesión</a></li>
            <li id="cart" class="cartIcon-container">
                    <img src="./shopping-bag.svg" alt"shopping bag">
                    <span id="cart-count"></span>
            </li>
        </ul>
    </nav>
  `;


  const cartCountElement = document.getElementById('cart-count');
  
  let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
  cartCountElement.textContent = cartCount;

  cartCountItems(cartCount, cartCountElement);
};