import React, { Component } from 'react';
import axios from 'axios';

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
                this.state.users.map(user => {
                    return <>
                        <h3>{user.login}</h3>
                        <h4>{user.type}</h4>
                        <hr />
                    </>
                })
            }
        </>
    }
}

export default Users;
