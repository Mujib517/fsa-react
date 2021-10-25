import axios from 'axios';

const host = 'https://my-node-api-demo-2.herokuapp.com'

const userService = {
    login: function (user) {
        return axios.post(`${host}/api/users/login`, user);
    },
    saveToken(token) {
        localStorage.setItem('token', token);
    }
}

export default userService;

