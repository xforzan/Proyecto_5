
export const cleanPage = (page) => {
    const pageElement = document.querySelector(page);
    pageElement.innerHTML = '';
}