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

    function isFormInvalid() {
        return !book.name || !book.price;
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
                    <input value={book.name} name="name"
                        onChange={onValueChange} type="text"
                        placeholder="Name*" className="form-control" />

                    {book.name ? null : <span class="text-danger">Required</span>}
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-4">
                    <input value={book.price}
                        name="price" onChange={onValueChange}
                        type="text" placeholder="Price*"
                        className="form-control" />

                    {book.price ? null : <span class="text-danger">Required</span>}
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-4">
                    <button disabled={isFormInvalid()} type="button" onClick={onSave} class="btn btn-sm btn-success">Save</button>
                </div>
            </div>
        </form>
    </>
}

export default NewBook;
