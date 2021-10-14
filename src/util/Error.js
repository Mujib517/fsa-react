function Error({ show }) {
    return show && <div className="row-mt">
        <div className="col-6">
            <div className="alert alert-danger">Something went wrong. Please try again later</div>
        </div>
    </div>
}

export default Error;
