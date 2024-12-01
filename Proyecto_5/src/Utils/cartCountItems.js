
import { cart } from '../Data/cart';

export const cartCountItems = (cartCount, cartCountElement) => {


  const count = () => {
    let counter = 0;
    for (const item of cart){
      counter += item.quantity;
    }
    cartCount = counter;
    if (cartCount > 98) {
      cartCountElement.textContent = '+99';
      localStorage.setItem('cartCount', '+99');
    } else{
      cartCountElement.textContent = counter;
      localStorage.setItem('cartCount', counter);
    }
    
  }
  
  const addProductButton = document.querySelectorAll('.add');
  addProductButton.forEach((button) => {
    button.addEventListener('click', count);
    });
};

