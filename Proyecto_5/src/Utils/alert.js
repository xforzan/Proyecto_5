
export const alert = (type,title,text) => {

    if (type === 'success') {
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          
          Toast.fire({
            html: `
                <dotlottie-player class="successTick"
                    src="https://lottie.host/a11041cd-95f7-42ff-913d-eb54d9d79af5/gnhnRFIgxz.lottie" 
                    background="transparent" 
                    speed="1" 
                    style="width: 150px; height: 150px; display:flex;" 
                    autoplay>
                </dotlottie-player>
                <h3 class="h3Swall" >${title}</h3>
            `,

            customClass: {
              popup: 'css-swal-success',
            }
          });

        return;
    }

    else if (type === 'error') {
    Swal.fire({
      html: `
                <dotlottie-player class="cross" src="https://lottie.host/00c6b930-08f1-4e1c-95ee-9725342246eb/RAFyTBD5GI.lottie" background="transparent" speed="1" style="width: 300px; height: 300px"  autoplay></dotlottie-player>
                <h2>${title}</h2>
                <p>${text}</p>
            `,
        confirmButtonText: 'Cerrar',
        customClass: {
            popup: 'css-swal',
            confirmButton: 'btn-custom'
          }
      })
    return;
}

}