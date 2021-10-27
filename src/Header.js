import { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import UserContext from './context/UserContext';
import userService from './services/userService';
import ShouldRender from './util/ShouldRender';

function Header() {

    const history = useHistory();
    const { isLoggedIn, setLoggedIn } = useContext(UserContext);

    function onLogout() {
        userService.logout();
        setLoggedIn(false);
        history.push('/login');
    }

    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-collapse" id="navbarTogglerDemo01">
                    <NavLink to="/" className="navbar-brand">FSA</NavLink>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/users">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/books">Books</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/count">Counter</NavLink>
                        </li>
                    </ul>
                    <ShouldRender cond={!isLoggedIn}>
                        <NavLink to="/login" className="btn btn-danger btn-sm">Login</NavLink>
                    </ShouldRender>
                    &nbsp;
                    <ShouldRender cond={isLoggedIn}>
                        <button onClick={onLogout} className="btn btn-danger btn-sm">Logout</button>
                    </ShouldRender>
                </div>
            </div>
        </nav>
    </>
}

export default Header;
