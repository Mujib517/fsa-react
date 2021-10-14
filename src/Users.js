import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import Error from './util/Error';

import Loader from './Loader';

class Users extends Component {

    state = { users: [], loading: true, hasError: false };

    constructor() {
        super();
        /*
            Http Verbs GET, POST, PUT, PATCH and DELETE
        */
        axios.get('https://api.github.com/users1')
            .then(res => this.setState({ users: res.data, loading: false }))
            .catch(e => this.setState({ hasError: true, loading: false }));
    }

    render() {
        return <>
            <Loader show={this.state.loading} />
            <Error show={this.state.hasError} />
            <h1>Users</h1>
            {
                this.state.users.map(user => <User user={user} />)
            }
        </>
    }
}

export default Users;
