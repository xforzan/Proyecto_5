
import { productsList } from "../Data/productsList";
import { products } from "../Pages/Products/products";


const hiddenProducts = [];

export const filtersListener = () => {
    


    const capacity = document.querySelector("#capacidad");


    let capacities = [];
    for (const product of productsList){
        if (!capacities.includes(product.storage)){
            capacities.push(product.storage);
            const option = document.createElement("option");
        option.value = product.storage;
        option.innerHTML = product.storage;
        capacity.appendChild(option);
        }
        
    }
    capacity.addEventListener("change", () => {

        
        hiddenProducts.length = 0;
        hiddenProducts.push(...productsList);
        productsList.length = 0;




        if (capacity.value !== "default"){
            console.log(capacity.value);
            hiddenProducts.forEach(product => {
                if (product.storage === capacity.value){
                    productsList.push(product);
                    products();
                    console.log(productsList);
                }
                
            });
            productsList.length = 0;
            productsList.push(...hiddenProducts);
            hiddenProducts.length = 0;

        }
        else{
            products();
        }
    });














    const color = document.querySelector("#color");
    let colors = [];



    const brand = document.querySelector("#marca");
    let brands = [];


    const orderBy = document.querySelector("#ordenarPor");



}