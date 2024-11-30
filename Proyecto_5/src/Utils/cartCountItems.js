

export const cartCountItems = (cartCount, cartCountElement) => {

  const addCartCount = () => {
    if (cartCount > 98) {
        cartCountElement.textContent = '+99';
        localStorage.setItem('cartCount', '+99');
      } else {
        cartCount++;
        cartCountElement.textContent = cartCount;
        localStorage.setItem('cartCount', cartCount);
      }}


  const removeCartCount = () => {
    if (cartCountElement.textContent === '+99') {
      cartCount = 99;
      cartCountElement.textContent = cartCount;
      localStorage.setItem('cartCount', cartCount);
    }
    else if (cartCount > 0) {
      console.log("barvaro")
      cartCount--;
      cartCountElement.textContent = cartCount;
      localStorage.setItem('cartCount', cartCount);
    }
    
  };


  const addProductButton = document.querySelector('#add-to-cart');
  const removeProductButton = document.querySelector('#remove-from-cart');
  if (addProductButton) {
    addProductButton.addEventListener('click', addCartCount);
  }
  if (removeProductButton) {
    removeProductButton.addEventListener('click', removeCartCount);
  }
};