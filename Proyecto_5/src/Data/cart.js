
const localCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

export const cart = localCart;