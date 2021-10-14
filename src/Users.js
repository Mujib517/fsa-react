import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import Error from './util/Error';
import Loader from './util/Loader';

class Users extends Component {

    state = { users: [], loading: true, hasError: false };

    componentDidMount = async () => {
        try {
            const response = await axios.get('https://api.github.com/users');
            this.setState({ users: response.data, loading: false });
        } catch (e) {
            this.setState({ hasError: true, loading: false });
        }
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
