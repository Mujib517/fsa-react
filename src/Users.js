import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

class Users extends Component {

    state = { users: [] };

    constructor() {
        super();
        /*
            Http Verbs GET, POST, PUT, PATCH and DELETE
        */
        axios.get('https://api.github.com/users')
            .then(res => this.setState({ users: res.data }))
            .catch(e => console.log(e));
    }

    render() {
        return <>
            <h1>Users</h1>
            {
                this.state.users.map(user => <User user={user} />)
            }
        </>
    }
}

export default Users;
