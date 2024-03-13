import { userStorage } from "./storage";
export const getToken=() => {
    userStorage('token').value
}