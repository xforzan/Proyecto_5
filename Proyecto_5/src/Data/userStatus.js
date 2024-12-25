let localStatus = localStorage.getItem('userStatus') 
  ? JSON.parse(localStorage.getItem('userStatus')) 
  : { logged: false };

localStorage.setItem('userStatus', JSON.stringify(localStatus));

export let userStatus = localStatus;