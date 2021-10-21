import axios from 'axios';

const host = 'https://my-node-api-demo-2.herokuapp.com'

function get(pageIndex, limit) {
    const url = `${host}/api/books?pageIndex=${pageIndex}&limit=${limit}`
    return axios.get(url);
}

function remove(id) {
    const url = `${host}/api/books/${id}`;
    return axios.delete(url);
}

function post(book) {
    const url = `${host}/api/books`;
    return axios.post(url, book);
}

export default {
    get,
    remove,
    post
}

