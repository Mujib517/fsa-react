import { useState } from "react";
import bookService from "../services/bookService";

function NewBook(props) {

    const [book, setBook] = useState({});
    const [isSuccess, setSuccess] = useState(false);


    function reset() {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
        setBook({ name: '', price: '' });
    }

    async function onSave() {
        await bookService.post(book);
        props.history.push('/books');
        reset();
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

    return <>
        {
            isSuccess && <div className="col-5 alert alert-success">
                Successfully Saved!
            </div>
        }
        <form>
            <div className="row mt-3">
                <h1>Add new book</h1>
            </div>
            <div className="row mt-3">
                <div className="col-4">
                    <input value={book.name} name="name" onChange={onValueChange} type="text" placeholder="Name" className="form-control" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-4">
                    <input value={book.price} name="price" onChange={onValueChange} type="text" placeholder="Price" className="form-control" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-4">
                    <button type="button" onClick={onSave} class="btn btn-sm btn-success">Save</button>
                </div>
            </div>
        </form>
    </>
}

export default NewBook;
