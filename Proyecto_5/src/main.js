import './style.css'


import { cartPage } from './Pages/Cart/cart';
import { login } from './Pages/Login/login';
import { account } from './Pages/Account/account';
import { linkPage } from './Utils/linkPage';
import { header } from './Components/Header/header';
import { products } from './Pages/Products/products';
import { footer } from './Components/Footer/footer';
import { navigationMobile } from './Components/NavigationMobile/navigationMobile';
import { searchListener } from './Utils/searchListener';
import { changeTheme } from './Utils/changeTheme';
import { contact } from './Pages/Contact/contact';
import { aboutUs } from './Pages/AboutUs/aboutUs';
import { productsList } from './Data/productsList';


products();
header();
navigationMobile();

footer();

linkPage('#cart', cartPage);
linkPage("#cartMobile", cartPage);
linkPage(".contact", contact);
linkPage(".aboutUs", aboutUs);



searchListener()
changeTheme()

localStorage.setItem('productsList', JSON.stringify(productsList));

export const listProducts =  localStorage.getItem('productsList') ? JSON.parse(localStorage.getItem('productsList')) : [];