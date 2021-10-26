import { NavLink } from 'react-router-dom';
import userService from './services/userService';

function Header(props) {

    function onLogout() {
        userService.logout();
        // props.history.push('/login');
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
                    <NavLink to="/login" className="btn btn-danger btn-sm">Login</NavLink>
                    &nbsp;
                    <button onClick={onLogout} className="btn btn-danger btn-sm">Logout</button>
                </div>
            </div>
        </nav>
    </>
}

export default Header;
