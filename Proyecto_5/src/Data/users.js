let localUsers = localStorage.getItem('users') 
  ? JSON.parse(localStorage.getItem('users')) 
  : [
      {
        id: 1,
        name: 'Juan',
        surname: 'Perez',
        country: 'España',
        city: 'Córdoba',
        province: 'Córdoba',
        postalCode: '14100',
        address: 'Plaza de la Corredera 1, 1ºB',
        email: 'juanperez@gmail.com',
        password: '1234',
        phone: '+34623456298',
        avatar: 'https://autoid.co/cdn/shop/files/bmw-m5-f90-pre-lci-motorsport-csl-style-yellow-drl-module-set-2016-2020-motorsport-740132.jpg?v=1726655370&width=2022',
        boughtProducts: [],
      },
      {
        id: 2,
        name: 'Pedro',
        surname: 'Gonzalez',
        country: 'España',
        city: 'Madrid',
        province: 'Madrid',
        postalCode: '28001',
        address: 'Calle de Alcalá 1, 2ºC',
        email: 'pedritogonzalez@gmail.com',
        password: '1234',
        phone: '+34623490298',
        avatar: 'https://i.seadn.io/gcs/files/3085b3fc65f00b28699b43efb4434eec.png?auto=format&dpr=1&w=1000',
        boughtProducts: [],
      }
  ];

localStorage.setItem('users', JSON.stringify(localUsers));

export const users = localUsers;