export default function Book({ book }) {
    return <>
        <h4>{book.id} {book.name}</h4>
        <p>$ {book.price}</p>
        <hr />
    </>
}