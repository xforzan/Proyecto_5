
export const alert = (type,title,text) => {

    if (type === 'success') {
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          
          Toast.fire({
            icon: "success",
            title: title,
            customClass: {
              popup: 'css-swal',
            }
          });

        return;
    }

    else if (type === 'error') {
    Swal.fire({
        title: title,
        text: text,
        icon: 'error',
        confirmButtonText: 'Cerrar',
        customClass: {
            popup: 'css-swal',
          }
      })
    return;
}

}