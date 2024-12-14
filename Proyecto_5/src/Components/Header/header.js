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
    <svg id="logo" class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="412" height="112" viewBox="0 0 309 84" preserveAspectRatio="xMidYMid meet">
  <defs><g/></defs>
  <g fill="currentColor" fill-opacity="1">
    <g transform="translate(10.613172, 56.337275)">
      <g><path d="M 2.734375 0 L 2.734375 -29.078125 L 14.203125 -29.078125 L 14.203125 0 Z M 2.734375 -33.171875 L 2.734375 -43.546875 L 13.859375 -43.546875 L 13.859375 -33.171875 Z M 2.734375 -33.171875 "/></g>
    </g>
  </g>
  <g fill="currentColor" fill-opacity="1">
    <g transform="translate(27.539189, 56.337275)">
      <g><path d="M 53.578125 -5.1875 C 53.578125 -6.375 53.175781 -7.363281 52.375 -8.15625 C 51.582031 -8.945312 50.640625 -9.34375 49.546875 -9.34375 L 18.15625 -9.34375 C 15.0625 -9.34375 12.351562 -9.976562 10.03125 -11.25 C 7.707031 -12.53125 5.910156 -14.273438 4.640625 -16.484375 C 3.367188 -18.691406 2.734375 -21.160156 2.734375 -23.890625 L 2.734375 -29.078125 L 14.125 -29.078125 L 14.125 -23.890625 C 14.125 -22.703125 14.519531 -21.707031 15.3125 -20.90625 C 16.113281 -20.113281 17.0625 -19.71875 18.15625 -19.71875 L 49.546875 -19.71875 C 52.640625 -19.71875 55.347656 -19.082031 57.671875 -17.8125 C 59.992188 -16.539062 61.789062 -14.8125 63.0625 -12.625 C 64.332031 -10.4375 64.96875 -7.957031 64.96875 -5.1875 L 64.96875 0 L 53.578125 0 Z M 53.578125 -5.1875 "/></g>
    </g>
  </g>
  <g fill="currentColor" fill-opacity="1">
    <g transform="translate(95.243245, 56.337275)">
      <g><path d="M 2.734375 0 L 2.734375 -47.703125 L 14.125 -47.703125 L 14.125 -29.078125 L 49.546875 -29.078125 C 52.640625 -29.078125 55.347656 -28.4375 57.671875 -27.15625 C 59.992188 -25.882812 61.789062 -24.15625 63.0625 -21.96875 C 64.332031 -19.789062 64.96875 -17.3125 64.96875 -14.53125 L 64.96875 0 L 53.578125 0 L 53.578125 -14.53125 C 53.578125 -15.71875 53.175781 -16.707031 52.375 -17.5 C 51.582031 -18.300781 50.640625 -18.703125 49.546875 -18.703125 L 14.125 -18.703125 L 14.125 0 Z M 2.734375 0 "/></g>
    </g>
  </g>
  <g fill="currentColor" fill-opacity="1">
    <g transform="translate(162.947301, 56.337275)">
      <g><path d="M 18.15625 0 C 15.0625 0 12.351562 -0.632812 10.03125 -1.90625 C 7.707031 -3.1875 5.910156 -4.925781 4.640625 -7.125 C 3.367188 -9.332031 2.734375 -11.800781 2.734375 -14.53125 C 2.734375 -17.3125 3.367188 -19.789062 4.640625 -21.96875 C 5.910156 -24.15625 7.707031 -25.882812 10.03125 -27.15625 C 12.351562 -28.4375 15.0625 -29.078125 18.15625 -29.078125 L 49.546875 -29.078125 C 52.640625 -29.078125 55.347656 -28.4375 57.671875 -27.15625 C 59.992188 -25.882812 61.789062 -24.15625 63.0625 -21.96875 C 64.332031 -19.789062 64.96875 -17.3125 64.96875 -14.53125 C 64.96875 -11.800781 64.332031 -9.332031 63.0625 -7.125 C 61.789062 -4.925781 59.992188 -3.1875 57.671875 -1.90625 C 55.347656 -0.632812 52.640625 0 49.546875 0 Z M 14.125 -14.53125 C 14.125 -13.351562 14.519531 -12.363281 15.3125 -11.5625 C 16.113281 -10.769531 17.0625 -10.375 18.15625 -10.375 L 49.546875 -10.375 C 50.640625 -10.375 51.582031 -10.769531 52.375 -11.5625 C 53.175781 -12.363281 53.578125 -13.351562 53.578125 -14.53125 C 53.578125 -15.71875 53.175781 -16.707031 52.375 -17.5 C 51.582031 -18.300781 50.640625 -18.703125 49.546875 -18.703125 L 18.15625 -18.703125 C 17.0625 -18.703125 16.113281 -18.300781 15.3125 -17.5 C 14.519531 -16.707031 14.125 -15.71875 14.125 -14.53125 Z M 14.125 -14.53125 "/></g>
    </g>
  </g>
  <g fill="currentColor" fill-opacity="1">
    <g transform="translate(230.651369, 56.337275)">
      <g><path d="M 2.734375 -29.078125 L 49.546875 -29.078125 C 52.640625 -29.078125 55.347656 -28.4375 57.671875 -27.15625 C 59.992188 -25.882812 61.789062 -24.15625 63.0625 -21.96875 C 64.332031 -19.789062 64.96875 -17.3125 64.96875 -14.53125 C 64.96875 -11.800781 64.332031 -9.332031 63.0625 -7.125 C 61.789062 -4.925781 59.992188 -3.1875 57.671875 -1.90625 C 55.347656 -0.632812 52.640625 0 49.546875 0 L 14.125 0 L 14.125 18.703125 L 2.734375 18.703125 Z M 14.125 -10.375 L 49.546875 -10.375 C 50.640625 -10.375 51.582031 -10.769531 52.375 -11.5625 C 53.175781 -12.363281 53.578125 -13.351562 53.578125 -14.53125 C 53.578125 -15.71875 53.175781 -16.707031 52.375 -17.5 C 51.582031 -18.300781 50.640625 -18.703125 49.546875 -18.703125 L 14.125 -18.703125 Z M 14.125 -10.375 "/></g>
    </g>
  </g>
</svg>


      <div class="searchBar">
        <span></span>
        <input id="searchBar" type="text" name="Search bar" placeholder="Search">
        </div>
    <nav class="headerNav">
  
        <ul>
            <li><a href="#">Productos</a></li>
            <li><button class="changeTheme" id="lightTheme"><span></span></button></li>
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