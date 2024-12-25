

export const logOut = () => {
    localStorage.setItem('userStatus', JSON.stringify({ logged: false}));
}