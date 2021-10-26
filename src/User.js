import { Link } from 'react-router-dom';

function User(props) {
    const { user } = props;

    return <div className="row mt-3">
        <div className="col-3">
            <div className="card">
                <img alt="avatar" width="200" height="200" src={user.avatar_url} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{user.login}</h5>
                    <p className="card-text">{user.type}</p>
                    <Link to={`/users/${user.login}`} className="btn btn-sm btn-primary">
                        Select
                    </Link>
                </div>
            </div>
        </div>
    </div>
}

export default User;
