import './account.css';

import { cleanPage } from '../../Utils/cleanPage';
import { userStatus } from '../../Data/userStatus';
import { users } from '../../Data/users';
import { logOut } from '../../Utils/logOut';
import { productsList } from '../../Data/productsList';

export const account = () => {
  cleanPage('main');

  const user = users.find(u => u.id === userStatus.id);

  const accountContainer = document.createElement('div');
  accountContainer.classList.add('account-container');

  accountContainer.innerHTML = `
    <h1>Mi cuenta</h1>
    
    <div class="userDetails">
      <img src="${user.avatar}" alt="avatar">
      <h2>¡Hola de vuelta ${user.name}!</h2>
      <p>${user.email}</p>
      <button id="logout">Cerrar sesión</button>
    </div>
    
    <section class="changeContent">
      <div class="btns">
      <div id="btn"></div>
        <button type="button" class="changeBtn" id="ordersBtn" onclick="leftClick()">😊</button>
        <button type="button" class="changeBtn" id="accountBtn" onclick="rightClick()">❤️<span></span></button>
      </div>




      
      <div id="ordersSection" class="sectionContent" style="display:none;">
        <h3>Mis Pedidos</h3>
        <ul id="purchasedProducts">
        </ul>
      </div>
      
      <div id="accountSection" class="sectionContent">
        <h3>Detalles de la Cuenta</h3>
        <form id="editForm">
          <label for="name">Nombre:</label>
          <input type="text" id="name" value="${user.name}" placeholder="Ingresa tu nombre">

          <label for="surname">Apellido:</label>
          <input type="text" id="surname" value="${user.surname}" placeholder="Ingresa tu apellido">

          <label for="country">País:</label>
          <input type="text" id="country" value="${user.country}" placeholder="Ingresa tu país">

          <label for="city">Ciudad:</label>
          <input type="text" id="city" value="${user.city}" placeholder="Ingresa tu ciudad">

          <label for="province">Provincia:</label>
          <input type="text" id="province" value="${user.province}" placeholder="Ingresa tu provincia">

          <label for="postalCode">Código Postal:</label>
          <input type="text" id="postalCode" value="${user.postalCode}" placeholder="Ingresa tu código postal">

          <label for="address">Dirección:</label>
          <input type="text" id="address" value="${user.address}" placeholder="Ingresa tu dirección">

          <label for="avatar">Avatar:</label>
          <input type="text" id="avatar" value="${user.avatar}" placeholder="Ingresa la URL de tu avatar">
          
          <label for="email">Correo electrónico:</label>
          <input type="email" id="email" value="${user.email}" placeholder="Ingresa tu correo">

          <label for="currentPassword">Contraseña actual:</label>
          <input type="password" id="currentPassword" placeholder="Ingresa tu contraseña actual">

          <label for="newPassword">Nueva contraseña:</label>
          <input type="password" id="newPassword" placeholder="Ingresa tu nueva contraseña">

          <label for="confirmNewPassword">Confirmar nueva contraseña:</label>
          <input type="password" id="confirmNewPassword" placeholder="Confirma tu nueva contraseña">
          
          <button class="submitBtn" type="submit">Guardar cambios</button>
        </form>
      </div>
    </section>
  `;

  const main = document.querySelector('main');
  main.appendChild(accountContainer);

 
  const ordersBtn = document.getElementById('ordersBtn');
  const accountBtn = document.getElementById('accountBtn');
  const ordersSection = document.getElementById('ordersSection');
  const accountSection = document.getElementById('accountSection');
  
  ordersBtn.addEventListener('click', () => {
    ordersSection.style.display = 'block';
    accountSection.style.display = 'none';
  });
  
  accountBtn.addEventListener('click', () => {
    ordersSection.style.display = 'none';
    accountSection.style.display = 'block';
  });






  if (user.boughtProducts.length === 0) {
    const productItem = document.createElement('li');
    const purchasedProductsList = document.getElementById('purchasedProducts');
    console.log('No tienes compras realizadas');
    productItem.innerHTML = `
    <h3>No tienes compras realizadas</h3>`;
    purchasedProductsList.appendChild(productItem);

  }
  else {

    const purchasedProductsList = document.getElementById('purchasedProducts');
    user.boughtProducts.forEach(product => {
  
      const productDetails = productsList.find(p => p.id === product.id);
  
  
      
  
  
      if (productDetails) {
        const productItem = document.createElement('li');
        
  
        const productQuantity = product.quantity;
  
        productItem.innerHTML = ` 
          <div class="productInfo">
            <img src="${productDetails.image}" alt="${productDetails.name}" class="product-image">
            <div class="productDetails">
              <strong>${productDetails.name}</strong>
              <span>Cantidad: ${productQuantity}</span>
              Precio: ${productDetails.price}
            </div>
          </div>
        `;
        
        purchasedProductsList.appendChild(productItem);
      }
  
      
    });

  }




  


  const editForm = document.getElementById('editForm');
  editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;


    if (currentPassword !== user.password) {
      alert('La contraseña actual es incorrecta');
      return;
    }


    if (newPassword !== confirmNewPassword) {
      alert('Las nuevas contraseñas no coinciden');
      return;
    }


    if (newPassword.trim() === '') {
      alert('La nueva contraseña no puede estar vacía');
      return;
    }

    const newName = document.getElementById('name').value;
    const newSurname = document.getElementById('surname').value;
    const newCountry = document.getElementById('country').value;
    const newCity = document.getElementById('city').value;
    const newProvince = document.getElementById('province').value;
    const newPostalCode = document.getElementById('postalCode').value;
    const newAddress = document.getElementById('address').value;
    const newAvatar = document.getElementById('avatar').value;
    const newEmail = document.getElementById('email').value;

    if (newName === '' || newEmail === '' || newAvatar === '' || newSurname === '' || newCountry === '' || newCity === '' || newProvince === '' || newPostalCode === '' || newAddress === '') {
      alert('Por favor, rellena todos los campos');
      return;
    }


    user.name = newName;
    user.surname = newSurname;
    user.country = newCountry;
    user.city = newCity;
    user.province = newProvince;
    user.postalCode = newPostalCode;
    user.address = newAddress;
    user.avatar = newAvatar;
    user.password = newPassword;
    user.email = newEmail;


    localStorage.setItem('users', JSON.stringify(users));


    window.location.reload();
    alert('Datos guardados correctamente');
  });


  const logoutButton = document.getElementById('logout');
  logoutButton.addEventListener('click', () => {
    logOut();
    window.location.reload();
  });








  window.leftClick = () => {
    const btn = document.getElementById('btn');
    btn.style.left = '0';
};

window.rightClick = () => {
    const btn = document.getElementById('btn');
    btn.style.left = '100px';
};







};
