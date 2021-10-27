import { useState } from "react";
import { useContext } from "react/cjs/react.development";
import UserContext from "./context/UserContext";
import userService from "./services/userService";
import Error from "./util/Error";

function Login(props) {

    const [user, setUser] = useState({});
    const [hasError, setError] = useState(false);
    const { setLoggedIn } = useContext(UserContext);

    function onTextChange(e) {
        const newState = { ...user, [e.target.name]: e.target.value };
        setUser(newState);
    }

    async function onLogin() {
        try {
            const res = await userService.login(user);
            userService.saveToken(res.data.token);
            setLoggedIn(true);
            props.history.push('/books');
        } catch (e) {
            setError(true);
            console.log(e);
        }
    }

    return <div className="container">
        <Error show={hasError} />
        <h1>Login</h1>
        <div className="row mt-3">
            <div className="col-4">
                <input name="username" onChange={onTextChange} type="text" placeholder="Email" className="form-control" />
            </div>

        </div>
        <div className="row mt-3">
            <div className="col-4">
                <input name="password" onChange={onTextChange} type="password" placeholder="Password" className="form-control" />
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-4">
                <button onClick={onLogin} className="btn btn-success">Login</button>
            </div>
        </div>
    </div>
}

export default Login;
