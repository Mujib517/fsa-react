import LoaderImg from './../img/loading.gif';
import './Loader.css';

function Loader({ show }) {
    return show && <div class="loader">
        <img src={LoaderImg} />
        <span>Loading...</span>
    </div>

}

export default Loader;
