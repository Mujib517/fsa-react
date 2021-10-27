import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './Header';
import Footer from './Footer';

function Main() {
    return <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
    </BrowserRouter>
}

export default Main;
