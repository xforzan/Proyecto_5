import { hiddenProducts } from "../Data/hiddenProducts";
import { productsList } from "../Data/productsList";
import { products } from "../Pages/Products/products";
import { notFound } from "../Pages/NotFound/notFound";

export const searchListener = () => {
    const searchBar = document.querySelector("#searchBar");


    searchBar.addEventListener("input", () => {
    });


    searchBar.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const searchValue = searchBar.value.toLowerCase();
        const filteredProducts = productsList.filter(product => 
            product.name.toLowerCase().includes(searchValue)
        );


        if (filteredProducts.length === 0) {
            notFound(searchBar.value);
        }
        else {
        hiddenProducts.length = 0;
        hiddenProducts.push(...productsList);
        productsList.length = 0;
        for (const product of hiddenProducts) {
            if (filteredProducts.includes(product)) {
                productsList.push(product);
            } else {

            }
        }
        products();
        productsList.length = 0;
        productsList.push(...hiddenProducts);
        hiddenProducts.length = 0;
    }
        

        }

        

        
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            alert("prueba");
        }
    });
};

