let localStatus = localStorage.getItem('userStatus') 
  ? JSON.parse(localStorage.getItem('userStatus')) 
  : { logged: true, id: 1 };

localStorage.setItem('userStatus', JSON.stringify(localStatus));

export let userStatus = localStatus;






// export const userStatus = {
//     logged: true,
//     id: 1,
// };