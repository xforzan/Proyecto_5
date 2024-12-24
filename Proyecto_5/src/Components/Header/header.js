import { cartCountItems } from '../../Utils/cartCountItems';
import { userStatus } from '../../Data/userStatus';
import { users } from '../../Data/users';
import { account } from '../../Pages/Account/account';
import { login } from '../../Pages/Login/login';
import { linkPage } from '../../Utils/linkPage';
import './header.css';

export const header = () => {
  const header = document.querySelector('header');

  header.innerHTML = `
    <img src="/logo.svg" alt="logo" id="logo">
    <nav class="links">
    <ul>
    <li class="contact"><a href="#">Contacto</a></li>
    <li id="aboutUs"><a href="#">Sobre Nosotros</a></li>
    </ul>
    </nav>
      <div class="searchBar">
        <span></span>
        <input id="searchBar" type="text" name="Search bar" placeholder="Introduce tu búsqueda...">
        </div>
    <nav class="headerNav">
  
        <ul>
            <li id="cart" class="cartIcon-container">
                    <img src="./shopping-bag.svg" alt"shopping bag">
                    <span id="cart-count"></span>
            </li>
            <li class="avatar" id="account">
                <img class="avatarImg" src="/account.png" alt="Iniciar Sesión" title="Iniciar Sesión">
                </li>
        </ul>
    </nav>
  `;

  const logo = document.querySelector('#logo');
  logo.addEventListener('click', () => {
    location.reload();
  });

  const cartCountElement = document.getElementById('cart-count');
  
  let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
  cartCountElement.textContent = cartCount;

  cartCountItems(cartCount, cartCountElement);


  if (userStatus.logged === false){
    const avatar = document.querySelector('#account');
    if(avatar.id === 'account'){
        avatar.id = 'login';
        linkPage("#login", login);
    }
}
else{
    linkPage("#account", account);
    const avatarImg = document.querySelector('.avatarImg');
    const user = users.find(u => u.id === userStatus.id);
    avatarImg.src = user.avatar;
    avatarImg.alt = "avatar";
}
};