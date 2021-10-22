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
        <td>{book.name}</td>
        <td>$ {book.price}</td>
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