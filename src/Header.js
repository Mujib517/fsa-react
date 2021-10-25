import { Link } from 'react-router-dom';

function Header() {
    return <>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <div class="navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/" class="navbar-brand">FSA</Link>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/users">Users</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/books">Books</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/count">Counter</Link>
                        </li>
                    </ul>
                    <Link to="/login" className="btn btn-danger btn-sm">Login</Link>
                </div>
            </div>
        </nav>
    </>
}

export default Header;
