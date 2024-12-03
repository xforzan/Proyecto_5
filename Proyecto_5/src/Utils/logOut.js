
import { userStatus } from "../Data/userStatus"

export const logOut = () => {
    localStorage.setItem('userStatus', JSON.stringify({ logged: false, id: 0 }));
}