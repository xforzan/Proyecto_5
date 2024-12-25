
# Ishop

Ishop es una tienda online que permite a los usuarios explorar y comprar una variedad de productos. La página cuenta con una barra de búsqueda y filtros para facilitar la navegación. Los usuarios pueden crear cuentas, iniciar sesión y guardar los productos comprados en el apartado "Mi Cuenta", todo gestionado localmente a través de LocalStorage, sin necesidad de un backend o base de datos. Este enfoque hace que la experiencia de compra sea rápida y sencilla, ideal para quienes buscan una solución ligera y accesible.


## Autores

- [@xforzan](https://www.github.com/xforzan)


## Uso

1. Una vez que abras la página, puedes buscar productos usando la barra de búsqueda ubicada en la parte superior.
2. Usa los filtros disponibles para afinar los resultados según marca, precio u otras opciones.
3. Los productos que compres se guardarán localmente en el almacenamiento del navegador (LocalStorage), y podrás verlos en la página de "Mi Cuenta" cuando inicies sesión.

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **HTML5** para la estructura del sitio web.
- **CSS3** para el diseño y estilo de la interfaz.
- **JavaScript** para la interacción y lógica de la tienda.
- **LocalStorage** para almacenar datos del usuario y productos comprados sin necesidad de backend.

## Librerías utilizadas

Este proyecto utiliza las siguientes librerías para mejorar la funcionalidad y la experiencia del usuario:

- **[SweetAlert2](https://sweetalert2.github.io/)**: Librería para crear alertas personalizadas con un diseño atractivo y moderno. Se utiliza para mostrar mensajes de éxito, error o confirmación de manera visualmente atractiva.

  Se incluye con el siguiente script:
  ```html
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

- **[DotLottie Player](https://github.com/dotlottie/player)**: Un reproductor para animaciones Lottie, que permite mostrar animaciones de alta calidad y ligeras directamente en el navegador. Esta librería se utiliza para mostrar animaciones interactivas en la tienda online.

  Se incluye con el siguiente script:
  ```html
  <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
## Prueba de Login

Para probar el inicio de sesión y las funcionalidades de la tienda, puedes usar las siguientes credenciales de prueba:

- **Correo electrónico**: testuser@ishop.com
- **Contraseña**: testpassword123

Una vez que inicies sesión, podrás acceder a la sección "Mi Cuenta", donde verás los productos que hayas comprado (almacenados localmente en el navegador mediante LocalStorage).

> **Nota**: Las compras no se guardarán permanentemente, ya que el proyecto usa LocalStorage, que solo retiene los datos mientras la sesión esté activa.
