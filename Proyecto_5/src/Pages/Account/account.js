import './account.css';

import { cleanPage } from '../../Utils/cleanPage';
import { userStatus } from '../../Data/userStatus';
import { users } from '../../Data/users';
import { logOut } from '../../Utils/logOut';
import { productsList } from '../../Data/productsList';
import { alert } from '../../Utils/alert';

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
        <button type="button" class="changeBtn unselected" id="ordersBtn" onclick="leftClick()">
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px">
    <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z" fill="currentColor"/>
  </svg>
        </button>
        <button type="button" class="changeBtn selected" id="accountBtn" onclick="rightClick()">
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor">
  <path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/>
</svg>

        </button>
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

  window.leftClick = () => {
    const btn = document.getElementById('btn');
    btn.style.left = '0';
    if (ordersBtn.classList.contains('unselected')) {
      ordersBtn.classList.remove('unselected');
      ordersBtn.classList.add('selected');
      accountBtn.classList.remove('selected');
      accountBtn.classList.add('unselected');
    }
    

};

window.rightClick = () => {
    const btn = document.getElementById('btn');
    btn.style.left = '140px';
    if (accountBtn.classList.contains('unselected')) {
      accountBtn.classList.remove('unselected');
      accountBtn.classList.add('selected');
      ordersBtn.classList.remove('selected');
      ordersBtn.classList.add('unselected');
    }
};




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
              Precio: ${productDetails.price}€
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
      alert('error', '¡Ups!', 'La contraseña actual es incorrecta');
      return;
    }


    if (newPassword !== confirmNewPassword) {
      alert('error', '¡Ups!', 'Las nuevas contraseñas no coinciden');
      return;
    }


    if (newPassword.trim() === '') {
      alert('error', '¡Ups!', 'La nueva contraseña no puede estar vacía');
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
      alert('error', '¡Ups!', 'Por favor, rellena todos los campos');
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
    alert('success', '¡Datos guardados correctamente!', undefined);
  });


  const logoutButton = document.getElementById('logout');
  logoutButton.addEventListener('click', () => {
    logOut();
    window.location.reload();
  });









};
