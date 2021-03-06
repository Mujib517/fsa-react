import { useState } from "react";
import bookService from "../services/bookService";

function Heading({ book }) {
    return <div className="row mt-3">
        {book ?
            <h1>Edit book</h1> :
            <h1>Add new book</h1>
        }
    </div>
}

function NewBook(props) {

    const currentBook = props.location?.state?.book;
    const [book, setBook] = useState(currentBook || {});
    const [isSuccess, setSuccess] = useState(false);

    function reset() {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
        setBook({ name: '', price: '' });
    }

    async function onSave() {
        if (currentBook) {
            await bookService.put(book);
        } else {
            await bookService.post(book);
        }
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
            <Heading book={currentBook} />
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

// pipeline
// build : npm install, npm test, security checks, npm run build, deploy dev, qa, stage
// environments: local, dev, Qa, stage, prod,
// stage.facebook.com
// java (1MB) -> .jar(100KB)
// .net -> .exe
// android -> .apk
// javascript -> minify -> uglify -> .zip
