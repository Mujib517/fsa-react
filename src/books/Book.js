export default function Book({ book }) {
    return <tr>
        <td>{book.id}</td>
        <td>{book.name}</td>
        <td>$ {book.price}</td>
    </tr>
}