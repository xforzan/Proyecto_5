import './navigationMobile.css';
import { cartCountItems } from '../../Utils/cartCountItems';
import { userStatus } from '../../Data/userStatus';
import { account } from '../../Pages/Account/account';
import { linkPage } from '../../Utils/linkPage';
import { login } from '../../Pages/Login/login';

export const navigationMobile = () => {

    const nav = document.createElement('nav');
    nav.className = 'navMobile';
    nav.innerHTML = `
            <ul>
                <li id="home"><a href="#home"></a></li>
                <li><a href="#about">About</a></li>
                <li id="cartMobile" class="cartIcon-container">
                    <img src="./shopping-bag.svg" alt"shopping bag" class="shoppingBag">
                    <span id="cart-count2"></span>
                </li>
                <li class="avatar" id="account"><img src="/account.png" alt="avatar"</li>
            </ul>`
    
    document.body.appendChild(nav);

    const cartCountElement = document.getElementById('cart-count2');
  
    let cartCount2 = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
    cartCountElement.textContent = cartCount2;

    cartCountItems(cartCount2, cartCountElement);


    if (userStatus.logged === false){
        const avatar = document.querySelector('#account');
        if(avatar.id === 'account'){
            avatar.id = 'loginMobile';
            linkPage("#loginMobile", login);
        }
    }
    else{
        linkPage("#account", account);
    }
};

