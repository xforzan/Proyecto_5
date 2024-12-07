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
  
  const addEventListeners = () => {
    const addProductButton = document.querySelectorAll('.add');
    addProductButton.forEach((button) => {
      button.addEventListener('click', count);
    });
  };


  addEventListeners();


  const addButtons = new MutationObserver(() => {
    addEventListeners();
  });

  addButtons.observe(document.body, { childList: true, subtree: true });
};