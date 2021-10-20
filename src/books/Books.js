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

    const [books, setBooks] = useState([]);

    useEffect(async () => {
        try {
            const res = await axios.get('https://my-node-api-demo-2.herokuapp.com/api/books');
            setBooks(res.data.books);
        } catch (e) {
            // TODO: error handling
            console.log(e);
        }
    }, []);

    return <div>
        <h1>Books</h1>
        <Link to="/books/new" className="btn btn-danger btn-sm">Add New Book</Link>
        <table className="table table-bordered">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <tbody>
                {books.map(book => <Book book={book} />)}
            </tbody>
        </table>


    </div>
}

export default Books;

