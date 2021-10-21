import { useState } from "react";
import bookService from "../services/bookService";

function NewBook() {

    const [book, setBook] = useState({});

    async function onSave() {
        await bookService.post(book);
    }

    function onValueChange(e) {
        const newState = { ...book, [e.target.name]: e.target.value };
        setBook(newState);
    }

    // function onNameChange(evt) {
    //     const newState = { ...book, name: evt.target.value };
    //     setBook(newState);
    // }

    // function onPriceChange(evt) {
    //     const newState = { ...book, price: evt.target.value };
    //     setBook(newState);
    // }

    return <form>
        <div className="row mt-3">
            <h1>Add new book</h1>
        </div>
        <div className="row mt-3">
            <div className="col-4">
                <input name="name" onChange={onValueChange} type="text" placeholder="Name" className="form-control" />
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-4">
                <input name="price" onChange={onValueChange} type="text" placeholder="Price" className="form-control" />
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
