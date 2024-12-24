
export const linkPage = (id, page) => {
    const links = document.querySelectorAll(id);
    links.forEach(link => {
        link.addEventListener("click", () => {
            page();
        });
    });
    
};