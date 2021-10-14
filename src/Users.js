import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

import Loader from './Loader';

class Users extends Component {

    state = { users: [], loading: true };

    constructor() {
        super();
        /*
            Http Verbs GET, POST, PUT, PATCH and DELETE
        */
        axios.get('https://api.github.com/users')
            .then(res => this.setState({ users: res.data, loading: false }))
            .catch(e => this.setState({ loading: false }));
    }

    render() {
        return <>
            <Loader show={this.state.loading} />
            <h1>Users</h1>
            {
                this.state.users.map(user => <User user={user} />)
            }
        </>
    }
}

export default Users;
