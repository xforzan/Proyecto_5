

export const changeTheme = () => {
    const changeThemeButtons = document.querySelectorAll('.changeTheme');

    changeThemeButtons.forEach(button => {
        button.addEventListener('click', () => {
            changeThemeButtons.forEach(b => {
                if (b.id === 'darkTheme') {
                    b.id = 'lightTheme';
                    changeThemeLight();
                } else if (b.id === 'lightTheme') {
                    b.id = 'darkTheme';
                    changeThemeDark();
                }
            });
        });
    });
}


const changeThemeDark = () => {
    const body = document.querySelector('body');
    body.classList.add('dark');

    const header = document.querySelector('header');
    header.classList.add('headerDark');

    const logo = document.querySelector('#logo');
    logo.classList.add('logoDark');

};



const changeThemeLight = () => {
    const body = document.querySelector('body');
    body.classList.remove('dark');

    const header = document.querySelector('header');
    header.classList.remove('headerDark');

    const logo = document.querySelector('#logo');
    logo.classList.remove('logoDark');
};
