import './navigationMobile.css';
import { cartCountItems } from '../../Utils/cartCountItems';
import { userStatus } from '../../Data/userStatus';
import { account } from '../../Pages/Account/account';
import { linkPage } from '../../Utils/linkPage';
import { login } from '../../Pages/Login/login';
import { users } from '../../Data/users';

export const navigationMobile = () => {

    const nav = document.createElement('nav');
    nav.className = 'navMobile';
    nav.innerHTML = `
            <ul>
                <li id="home"></li>
                <li id="cartMobile" class="cartIcon-container">
                    <img src="./shopping-bag.svg" alt"shopping bag" class="shoppingBag">
                    <span id="cart-count2"></span>
                </li>
                <li class="avatar" id="accountMobile">
                <img class="avatarImgMobile" src="/account.png" alt="Iniciar Sesión" title="Iniciar Sesión">
                </li>
            </ul>`
    



    document.body.appendChild(nav);

    const cartCountElement = document.getElementById('cart-count2');
  
    let cartCount2 = localStorage.getItem('cartCount') ? localStorage.getItem('cartCount') : 0;
    cartCountElement.textContent = cartCount2;

    cartCountItems(cartCount2, cartCountElement);


    if (userStatus.logged === false){
        const avatar = document.querySelector('#accountMobile');
        if(avatar.id === 'accountMobile'){
            avatar.id = 'loginMobile';
            linkPage("#loginMobile", login);
        }
    }
    else{
        linkPage("#accountMobile", account);
        const avatarImg = document.querySelector('.avatarImgMobile');
        const user = users.find(u => u.id === userStatus.id);
        avatarImg.src = user.avatar;
        avatarImg.alt = "avatar";
    }


    const home = document.querySelector('#home');
    home.addEventListener('click', () => {
        location.reload();
    });
    
};

