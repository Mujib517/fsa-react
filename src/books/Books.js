import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import bookService from '../services/bookService';

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
const Books = ({ history }) => {

    const [data, setData] = useState({ books: [], metadata: {} });
    const [pageIndex, setPageIndex] = useState(0);
    const [limit, setLimit] = useState(10);

    const getData = async () => {
        try {
            const res = await bookService.get(pageIndex, limit);
            setData(res.data);
        } catch (e) {
            if (e.response.status === 401) {
                history.push('/login');
            }
            console.log(e, "error");
        }
    };

    useEffect(() => {
        getData();
    }, [pageIndex, limit]);

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

    const onLimitChange = (evt) => {
        setLimit(evt.target.value);
    }

    const onRemove = async (id) => {
        try {
            await bookService.remove(id);
            getData();
        } catch (e) {
            console.log(e);
        }
    }

    const isLastPage = () => pageIndex === data.metadata.totalPages - 1;
    const isFirstPage = () => pageIndex === 0;

    return <div>
        <h1>Books</h1>
        <Link to="/books/new" className="btn btn-danger btn-sm">Add New Book</Link>
        <div className="row mt-3">
            <div className="col-1">
                <select onChange={onLimitChange}>
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </div>
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
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.books.map(
                    book => <Book key={book.id} history={history} onRemove={onRemove} book={book} />
                )}
            </tbody>
        </table>
    </div>
}

export default Books;

