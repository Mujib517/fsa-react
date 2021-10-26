import axios from 'axios';
import userService from './userService';

const host = 'https://my-node-api-demo-2.herokuapp.com'

function get(pageIndex, limit) {
    const url = `${host}/api/books?pageIndex=${pageIndex}&limit=${limit}`;
    const headers = {
        authorization: 'Bearer ' + userService.getToken('token')
    };
    return axios.get(url, { headers });
}

function remove(id) {
    const url = `${host}/api/books/${id}`;
    const headers = {
        authorization: 'Bearer ' + userService.getToken('token')
    };
    return axios.delete(url, { headers });
}

function post(book) {
    const url = `${host}/api/books`;
    const headers = {
        authorization: 'Bearer ' + userService.getToken('token')
    };
    return axios.post(url, book, { headers });
}

function put(book) {
    const headers = {
        authorization: 'Bearer ' + userService.getToken('token')
    };
    return axios.put(`${host}/api/books/${book.id}`, book, { headers });
}

function getById(id) {
    const url = `${host}/api/books/${id}`;
    const headers = {
        authorization: 'Bearer ' + userService.getToken('token')
    };
    return axios.get(url, { headers });
}

const bookSvc = {
    get,
    remove,
    post,
    put,
    getById
}

export default bookSvc;

