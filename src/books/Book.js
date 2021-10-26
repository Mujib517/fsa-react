import { Link } from 'react-router-dom';
import dateUtils from '../util/dateUtils';

export default function Book({ book, onRemove, history }) {

    const onDelete = () => {
        onRemove(book.id);
    }

    const onEdit = () => {
        history.push(`/books/new`, { book: book })
        // history.push(`/books/${book.id}/update`, { book: book })
    }

    return <tr>
        <td>{book.id}</td>
        <td>
            <Link to={`/books/${book.id}`}>{book.name}</Link>
        </td>
        <td>$ {book.price}</td>
        <td>{dateUtils.getRelativeTime(book.updatedAt)}</td>
        <td>
            <button onClick={onEdit} className="btn btn-sm btn-success">
                <i className="fa fa-edit"></i>
            </button>
            &nbsp;
            <button onClick={onDelete} className="btn btn-sm btn-danger">
                <i className="fa fa-remove"></i>
            </button>
        </td>
    </tr>
}