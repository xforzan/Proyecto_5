
import { productsList } from "../Data/productsList";
import { products } from "../Pages/Products/products";
import { notFound } from "../Pages/NotFound/notFound";
import { alert } from "../Utils/alert";

const hiddenProducts = [];
const hiddenProducts2 = [];
const hiddenProducts3 = [];

const allProducts = [...productsList, ...hiddenProducts, ...hiddenProducts2, ...hiddenProducts3];
export { allProducts };

const capacities = [];
let colors = [];
let brands = [];


for (const product of productsList){
    if (!capacities.includes(product.storage)) {
        capacities.push(product.storage);
    }
    if (!colors.includes(product.color)){
        colors.push(product.color);
}
    if (!brands.includes(product.brand)){
        brands.push(product.brand);
    }
}
 




export const filtersListener = () => {
    
const capacityButton = document.querySelector("#capacidad");
const colorButton = document.querySelector("#color");
const brandButton = document.querySelector("#marca");
const orderByButton = document.querySelector("#ordenarPor");




if (productsList.length !== 0) {
    
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
        customClass: {
            popup: 'swal2-popup',
            confirmButton: 'swal2-confirm',
            cancelButton: 'swal2-cancel',
            title: 'swal2-title',
            htmlContainer: 'swal2-html-container',
        },
        preConfirm: () => {
            const selectedValue = document.querySelector("#selectCapacity").value;
            if (selectedValue) {

                if (selectedValue !== "default") {
                    capacityButton.textContent = selectedValue;




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

                        if (productsList.length !== 0) {
                            alert ('filterSuccess','Filtrado exitoso!','Se han filtrado los productos con capacidad de ' + selectedValue + '.');
                    }



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
                        if (productsList.length !== 0) {
                            alert ('filterSuccess','Filtrado exitoso!','Se han filtrado los productos de color ' + selectedValue + '.');
                    }

            

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

                        if (productsList.length !== 0) {
                            alert ('filterSuccess','Filtrado exitoso!','Se han filtrado los productos de la marca ' + selectedValue + '.');
                    }


                } else {
                    window.location.reload();

                }
            }
        }
    });
});


orderByButton.addEventListener("click", () => {

    const defaultOption = "<option value='default'>Selecciona una opción</option>";
let options = [];
options.push(defaultOption);
options.push(`<option value="priceAsc">Precio ascendente</option>`);
options.push(`<option value="priceDesc">Precio descendente</option>`);
options.push(`<option value="starsAsc">Valoración ascendente</option>`);
options.push(`<option value="starsDesc">Valoración descendente</option>`);

Swal.fire({
    title: 'Ordenar por',
    html: `<select id="selectCapacity" class="swal2-input">${options}</select>`,
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    preConfirm: () => {
        const selectedValue = document.querySelector("#selectCapacity").value;
        const selectedValueText = document.querySelector("#selectCapacity").selectedOptions[0].textContent;
        if (selectedValue) {
            if (selectedValue !== "default") {
                switch (selectedValue) {
                    case "priceAsc":
                        productsList.sort((a, b) => a.price - b.price);
                        break;
                    case "priceDesc":
                        productsList.sort((a, b) => b.price - a.price);
                        break;
                    case "starsAsc":
                        productsList.sort((a, b) => a.stars - b.stars);
                        break;
                    case "starsDesc":
                        productsList.sort((a, b) => b.stars - a.stars);
                        break;
                    default:
                        break;
                }
                products();
                if (productsList.length !== 0) {
                    alert ('filterSuccess','Filtrado exitoso!','Se han ordenado los productos por ' + selectedValueText + '.');
            }
            } else {
                window.location.reload();
            }

            
        }
    }
});

});



} else {
    notFound("filters",undefined);
}


}