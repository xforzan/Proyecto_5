import './notFound.css'
import { cleanPage } from '../../Utils/cleanPage';

export const notFound = (from, query) => {
    document.title = 'No encontrado';
    cleanPage('main');
    const main = document.querySelector('main');
    if (from === "searchBar"){
        main.innerHTML = `
    <section class="notFound">
        <h1 class="notFoundTitle">No hemos podido encontrar resultados para "${query}"</h1>`
    }
    else if (from === "filters"){
        main.innerHTML = `
        <section class="notFound">
        <h1 class="notFoundTitle">No hemos podido encontrar resultados con los filtros seleccionados</h1>
        <button id="backToProducts">Volver a productos</button>`;
    }
    
    const backToProducts = document.querySelector("#backToProducts");
    backToProducts.addEventListener("click", () => {
        window.location.reload();
    });
    
}