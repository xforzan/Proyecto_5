import './style.css'


import { cart } from './Pages/Cart/cart';
import { login } from './Pages/Login/login';
import { account } from './Pages/Account/account';
import { linkPage } from './Utils/linkPage';
import { header } from './Components/Header/header';
import { products } from './Pages/Products/products';
import { footer } from './Components/Footer/footer';
import { navigationMobile } from './Components/NavigationMobile/navigationMobile';

products();
header();
navigationMobile();

footer();

linkPage('#cart', cart);
linkPage("#logo", products);
linkPage("#login", login);
linkPage("#home", products);
linkPage("#account", account);
// linkPage("#account", account);