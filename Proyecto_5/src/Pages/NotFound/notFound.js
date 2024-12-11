import './notFound.css'
import { cleanPage } from '../../Utils/cleanPage';

export const notFound = (query) => {
    cleanPage('main');
    const main = document.querySelector('main');
    main.innerHTML = `
    <section class="notFound">
        <h1 class="notFoundTitle">No hemos podido encontrar resultados para "${query}"</h1>`
    
    
}