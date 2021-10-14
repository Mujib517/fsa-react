import LoaderImg from './img/loading.gif';

function Loader({ show }) {
    return show && <img src={LoaderImg} />
}

export default Loader;
