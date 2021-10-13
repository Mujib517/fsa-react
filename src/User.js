import { Link } from 'react-router-dom';

function User(props) {
    const { user } = props;

    return <div className="row mt-3">
        <div className="col-3">
            <div class="card">
                <img width="200" height="200" src={user.avatar_url} class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">{user.login}</h5>
                    <p class="card-text">{user.type}</p>
                    <Link to={`/users/${user.login}`} class="btn btn-sm btn-primary">
                        Select
                    </Link>
                </div>
            </div>
        </div>
    </div>
}

export default User;
