import { useState } from 'react';
import bookService from '../services/bookService';

function EditBook(props) {
    const currentBook = props.location.state.book;

    const [book,setBook] = useState(currentBook);
    const [isSuccess, setSuccess] = useState(false);

    function onValueChange(e) {
        const newState = { ...book, [e.target.name]: e.target.value };
        setBook(newState);
    }

    async function onSave() {
        await bookService.put(book);
        setSuccess(true);
    }

    function isFormInvalid() {
        return !book.name || !book.price;
    }

    return <>
        {
            isSuccess && <div className="col-5 alert alert-success">
                Successfully Saved!
            </div>
        }
        <form>
            <div className="row mt-3">
                <h1>Edit book</h1>
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

export default EditBook;
