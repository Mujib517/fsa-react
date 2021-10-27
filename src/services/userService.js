import axios from 'axios';

const host = 'https://my-node-api-demo-2.herokuapp.com'

const userService = {
    login: function (user) {
        return axios.post(`${host}/api/users/login`, user);
    },
    saveToken: function (token) {
        localStorage.setItem('token', token);
    },
    getToken: function () {
        return localStorage.getItem('token');
    },
    logout: function () {
        localStorage.removeItem('token');
    },
    isLoggedIn: function () {
        return !!localStorage.getItem('token');
    }
}

export default userService;

