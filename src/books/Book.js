export default function Book({ book, onRemove }) {

    const onDelete = () => {
        console.log("delete", book.id);
        onRemove(book.id);
    }

    return <tr>
        <td>{book.id}</td>
        <td>{book.name}</td>
        <td>$ {book.price}</td>
        <td>
            <button onClick={onDelete} className="btn btn-sm btn-danger">
                <i className="fa fa-remove"></i>
            </button>
        </td>
    </tr>
}