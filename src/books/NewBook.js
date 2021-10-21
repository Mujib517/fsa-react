import { useState } from "react";
import bookService from "../services/bookService";

function NewBook() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    async function onSave() {
        const data = {
            name,
            price
        };

        await bookService.post(data);
    }

    function onNameChange(evt) {
        setName(evt.target.value);
    }

    function onPriceChange(evt) {
        setPrice(evt.target.value);
    }

    return <form>
        <div className="row mt-3">
            <h1>Add new book</h1>
        </div>
        <div className="row mt-3">
            <div className="col-4">
                <input onChange={onNameChange} type="text" placeholder="Name" className="form-control" />
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-4">
                <input onChange={onPriceChange} type="text" placeholder="Price" className="form-control" />
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
