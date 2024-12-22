
import { productsList } from "../Data/productsList";
import { products } from "../Pages/Products/products";

const hiddenProducts = [];





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


                        let hiddenProducts = [];
                    

                        for (const product of productsList) {
                            if (product.storage !== selectedValue) {
                                console.log(product.storage);
                                hiddenProducts.push(product);

                                productsList.splice(0, productsList.length, ...productsList.filter(product => product.storage === selectedValue));
                            }
                            else {
                                for (const hiddenProduct of hiddenProducts) {
                                    if (hiddenProduct.storage === selectedValue) {
                                        productsList.push(hiddenProduct);
                                    }
                                }

                                
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
                    products();

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

                    if (hiddenProducts.length !== 0) {
                        hiddenProducts.forEach(product => {
                            if (product.color === selectedValue) {
                                productsList.push(product);

                            }
                        });
                        products();
                    }
                    else {
                        console.log("No hay productos con ese Color");
                    }
                


                    Swal.fire({
                        title: 'Filtrado exitoso!',
                        text: `Se han filtrado los productos con el Color ${selectedValue}.`,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    });

                } else {
                    products();

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

                    if (hiddenProducts.length !== 0) {
                        hiddenProducts.forEach(product => {
                            if (product.brand === selectedValue) {
                                productsList.push(product);

                            }
                        });
                        products();
                    }
                    else {
                        console.log("No hay productos con esa Marca");
                    }
                


                    Swal.fire({
                        title: 'Filtrado exitoso!',
                        text: `Se han filtrado los productos con la Marca ${selectedValue}.`,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    });

                } else {

                    products();

                }
            }
        }
    });
});





}