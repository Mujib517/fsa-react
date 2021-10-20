import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Book from './Book';

// functional component
// class Books extends React.Component {

//     state = { books: [] };

//     componentDidMount = async () => {
//         try {
//             const res = await axios.get('https://my-node-api-demo-2.herokuapp.com/api/books');
//             this.setState({ books: res.data });
//         } catch (e) {
//             // TODO: error handling
//             console.log(e);
//         }
//     }

//     render() {
//         return <div>
//             <h1>Books</h1>
//             {this.state.books.map(book => <Book book={book} />)}
//         </div>
//     }
// }

// hooks
const Books = () => {

    const [data, setData] = useState({ books: [], metadata: {} });
    const [pageIndex, setPageIndex] = useState(0);
    const limit = 2;

    useEffect(async () => {
        try {
            const url = `https://my-node-api-demo-2.herokuapp.com/api/books?pageIndex=${pageIndex}&limit=${limit}`
            const res = await axios.get(url);
            setData(res.data);
        } catch (e) {
            // TODO: error handling
            console.log(e);
        }
    }, [pageIndex]);

    const onPrev = () => {
        if (pageIndex !== 0) {
            let currPage = pageIndex;
            setPageIndex(--currPage);
        }
    }

    const onNext = async () => {
        let currPage = pageIndex;
        setPageIndex(++currPage);
    }

    const isLastPage = () => pageIndex === data.metadata.totalPages - 1;
    const isFirstPage = () => pageIndex === 0;

    return <div>
        <h1>Books</h1>
        <Link to="/books/new" className="btn btn-danger btn-sm">Add New Book</Link>
        <div className="row mt-3">
            <div className="col-1">
                <button disabled={isFirstPage()} onClick={onPrev} class="btn btn-sm btn-primary">
                    <i className="fa fa-arrow-left"></i>
                </button>
            </div>
            <div className="col-3">
                Showing Page {pageIndex + 1} of {data.metadata.totalPages}
            </div>
            <div className="col-1">
                <button disabled={isLastPage()} onClick={onNext} class="btn btn-sm btn-primary">
                    <i className="fa fa-arrow-right"></i>
                </button>
            </div>
        </div>
        <table className="table table-bordered">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <tbody>
                {data.books.map(book => <Book book={book} />)}
            </tbody>
        </table>


    </div>
}

export default Books;
