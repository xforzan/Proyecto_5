let localUsers = localStorage.getItem('users') 
  ? JSON.parse(localStorage.getItem('users')) 
  : [
      {
          id: 1,
          name: 'Juan',
          surname: 'Perez',
          country: 'Argentina',
          city: 'Buenos Aires',
          province: 'Buenos Aires',
          postalCode: 'C1428',
          address: 'Av. Cabildo 1234',
          email: 'juanperez@gmail.com',
          password: '1234',
          avatar: 'https://wallpapers.com/images/hd/soldier-boy-profile-picture-2g9ddl1byiw38lmh.jpg',
          boughtProducts: [],
      },
      {
          id: 2,
          name: 'Ana',
          avatar: 'https://images6.alphacoders.com/124/1243927.jpg',
      },
      {
          id: 3,
          name: 'Pedro',
          avatar: 'https://i.pinimg.com/736x/72/18/3f/72183f533d3a3ffcabf61f03c62b619c.jpg',
      }
  ];

localStorage.setItem('users', JSON.stringify(localUsers));

export const users = localUsers;