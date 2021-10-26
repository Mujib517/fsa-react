import { useEffect } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import bookSvc from "../services/bookService";
import NewReview from "./NewReview";
import Reviews from "./Reviews";

function BookDetail(props) {

    const [book, setBook] = useState({});
    const { id } = props.match.params;

    async function getData() {
        try {
            const res = await bookSvc.getById(id);
            setBook(res.data);
        } catch (e) {
            // TODO: error handling
            if (e.response.status === 401) { }
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return <div>
        <h3>{book.name} ${book.price} </h3>
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink exact to={`/books/${id}/reviews`} className="nav-link">Reviews</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/books/${id}/new`} className="nav-link" href="#">Add Review</NavLink>
                </li>
            </ul>
            <div class="tab-content">
                <Switch>
                    <Route path={`/books/${id}/new`} component={NewReview} />
                    <Route path={`/books/${id}/reviews`} component={Reviews} />
                    <Redirect to={`/books/${id}/reviews`} />
                </Switch>
            </div>
        </div>
    </div>
}

export default BookDetail;
