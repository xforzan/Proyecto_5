
import { productsList } from "../Data/productsList";
import { products } from "../Pages/Products/products";

const hiddenProducts = [];
const hiddenProducts2 = [];
const hiddenProducts3 = [];





const capacities = [];
let colors = [];
let brands = [];


for (const product of productsList) {
    if (!capacities.includes(product.storage)) {
        capacities.push(product.storage);
    }
}

for (const product of productsList){
    if (!colors.includes(product.color)){
            colors.push(product.color);
    }
}


for (const product of productsList){
    if (!brands.includes(product.brand)){
        brands.push(product.brand);
    }
}
 




export const filtersListener = () => {
    
const capacityButton = document.querySelector("#capacidad");
const colorButton = document.querySelector("#color");
const brandButton = document.querySelector("#marca");
const orderByButton = document.querySelector("#ordenarPor");





 capacityButton.addEventListener("click", () => {
    console.log(hiddenProducts);


    const defaultOption = "<option value='default'>Selecciona una capacidad</option>";


    let options = [];
    options.push(defaultOption);


    capacities.forEach(capacity => {
        options.push(`<option value="${capacity}">${capacity}</option>`);
    });


    Swal.fire({
        title: 'Selecciona una capacidad',
        html: `<select id="selectCapacity" class="swal2-input">${options}</select>`,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const selectedValue = document.querySelector("#selectCapacity").value;
            if (selectedValue) {

                if (selectedValue !== "default") {
                    capacityButton.textContent = selectedValue;

                    if (productsList.length !== 0) {


                        for (let i = productsList.length - 1; i >= 0; i--) {
                            if (productsList[i].storage !== selectedValue) {
                                hiddenProducts.push(productsList[i]);
                                productsList.splice(i, 1);
                            }
                        }
                        

                        for (let j = hiddenProducts.length - 1; j >= 0; j--) {
                            if (hiddenProducts[j].storage === selectedValue) {
                                productsList.push(hiddenProducts[j]);
                                hiddenProducts.splice(j, 1);
                            }
                        }

                        products();
                    }
                    else {
                        console.log("No hay productos con esa capacidad");
                    }
                


                    Swal.fire({
                        title: 'Filtrado exitoso!',
                        text: `Se han filtrado los productos con capacidad ${selectedValue}.`,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    });

                } else {
                    window.location.reload();

                }
            }
        }
    });
});





colorButton.addEventListener("click", () => {


    const defaultOption = "<option value='default'>Selecciona un color</option>";


    let options = [];
    options.push(defaultOption);


    colors.forEach(color => {
        options.push(`<option value="${color}">${color}</option>`);
    });


    Swal.fire({
        title: 'Selecciona un Color',
        html: `<select id="selectCapacity" class="swal2-input">${options}</select>`,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const selectedValue = document.querySelector("#selectCapacity").value;
            if (selectedValue) {

                if (selectedValue !== "default") {
                    capacityButton.textContent = selectedValue;

                    if (productsList.length !== 0) {


                        for (let i = productsList.length - 1; i >= 0; i--) {
                            if (productsList[i].color !== selectedValue) {
                                hiddenProducts2.push(productsList[i]);
                                productsList.splice(i, 1);
                            }
                        }
                        

                        for (let j = hiddenProducts2.length - 1; j >= 0; j--) {
                            if (hiddenProducts2[j].color === selectedValue) {
                                productsList.push(hiddenProducts2[j]);
                                hiddenProducts2.splice(j, 1);
                            }
                        }

                        products();
                    }
                    else {
                        console.log("No hay productos con esa capacidad");
                    }
                


                    Swal.fire({
                        title: 'Filtrado exitoso!',
                        text: `Se han filtrado los productos con capacidad ${selectedValue}.`,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    });

                } else {
                    window.location.reload();

                }
            }
        }
    });
});






brandButton.addEventListener("click", () => {


    const defaultOption = "<option value='default'>Selecciona una Marca</option>";


    let options = [];
    options.push(defaultOption);


    brands.forEach(brand => {
        options.push(`<option value="${brand}">${brand}</option>`);
    });


    Swal.fire({
        title: 'Selecciona una Marca',
        html: `<select id="selectCapacity" class="swal2-input">${options}</select>`,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const selectedValue = document.querySelector("#selectCapacity").value;
            if (selectedValue) {

                if (selectedValue !== "default") {
                    capacityButton.textContent = selectedValue;

                    if (productsList.length !== 0) {


                        for (let i = productsList.length - 1; i >= 0; i--) {
                            if (productsList[i].brand !== selectedValue) {
                                hiddenProducts3.push(productsList[i]);
                                productsList.splice(i, 1);
                            }
                        }
                        

                        for (let j = hiddenProducts3.length - 1; j >= 0; j--) {
                            if (hiddenProducts3[j].brand === selectedValue) {
                                productsList.push(hiddenProducts3[j]);
                                hiddenProducts3.splice(j, 1);
                            }
                        }

                        products();
                    }
                    else {
                        console.log("No hay productos con esa capacidad");
                    }
                


                    Swal.fire({
                        title: 'Filtrado exitoso!',
                        text: `Se han filtrado los productos con capacidad ${selectedValue}.`,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    });

                } else {
                    window.location.reload();

                }
            }
        }
    });
});





}