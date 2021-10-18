function NewBook() {

    function onSave() {
        console.log("Saving...");
    }

    return <form>
        <div className="row mt-3">
            <h1>Add new book</h1>
        </div>
        <div className="row mt-3">
            <div className="col-4">
                <input type="text" placeholder="Name" className="form-control" />
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-4">
                <input type="text" placeholder="Price" className="form-control" />
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-4">
                <button type="button" onClick={onSave} class="btn btn-sm btn-success">Save</button>
            </div>
        </div>
    </form>
}

export default NewBook;
