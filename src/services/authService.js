import {LoginError, RegistrationError} from "../errors";
import {catchError, client} from './client';

const login = ({username, password}) => {
    return client.post("/auth/signin", {username, password})
        .then((response) => {
            localStorage.setItem("user", JSON.stringify(response.data));
            return response.data;
        })
        .catch(catchError(LoginError));
};

const logout = () => localStorage.removeItem("user");

const register = ({username, email, password}) => {
    return client.post("/auth/signup", {username, email, password})
        .catch(catchError(RegistrationError));
};

export default {
    login,
    logout,
    register,
}