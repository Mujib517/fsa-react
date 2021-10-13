import React from 'react';
import axios from 'axios';

class UserById extends React.Component {
    state = { user: {} };

    constructor(props) {
        super();


        const id = props.match.params.id;
        axios.get(`https://api.github.com/users/${id}`)
            .then(res => {
                this.setState({ user: res.data });
            })
            .catch(e => console.log(e));
    }

    render() {
        const { user } = this.state;

        return <div className="row mt-3">
            <div className="col-3">
                <div class="card">
                    <img width="200" height="200" src={user.avatar_url} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">{user.login}</h5>
                        <p class="card-text">{user.type}</p>
                        <p>Following <span class="badge bg-danger">{user.following}</span></p>
                        <p>Follwers <span class="badge bg-secondary">{user.followers}</span></p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default UserById;
