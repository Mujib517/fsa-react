import React from 'react';
import axios from 'axios';
import Loader from './util/Loader';
import Error from './util/Error';
import ShouldRender from './util/ShouldRender';

class UserById extends React.Component {
    state = { user: {}, loading: true };

    componentDidMount = () => {
        const id = this.props.match.params.id;
        axios.get(`https://api.github.com/users/${id}`)
            .then(res => {
                this.setState({ user: res.data, loading: false });
            })
            .catch(e => {
                console.log(e);
                this.setState({ loading: false, hasError: true });
            });
    }

    render() {
        const { user } = this.state;

        return <>
            <Loader show={this.state.loading} />

            <ShouldRender cond={this.state.hasError}>
                <Error show={true} />
            </ShouldRender>
            <ShouldRender cond={!this.state.hasError}>
                <div className="row mt-3">
                    <div className="col-3">
                        <div class="card">
                            <img alt="avatar" width="200" height="200" src={user.avatar_url} class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">{user.login}</h5>
                                <p class="card-text">{user.type}</p>
                                <p>Following <span class="badge bg-danger">{user.following}</span></p>
                                <p>Follwers <span class="badge bg-secondary">{user.followers}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </ShouldRender>
        </>
    }
}

export default UserById;
