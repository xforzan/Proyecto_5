import { productsList } from "../Data/productsList";
import { products } from "../Pages/Products/products";
import { notFound } from "../Pages/NotFound/notFound";

export const searchListener = () => {
    const searchBar = document.querySelector("#searchBar");

    searchBar.addEventListener("keydown", (event) => {

        if (event.key === 'Enter') {
            const searchValue = searchBar.value.toLowerCase();


            const filteredProducts = productsList.filter(product =>
                product.name.toLowerCase().includes(searchValue)
            );


            if (filteredProducts.length === 0) {
                notFound("searchBar",searchBar.value);
            } else {

                productsList.length = 0;
                productsList.push(...filteredProducts); 

                products();
            }
        }
    });
};
