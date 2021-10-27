import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Users from './Users';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import UserById from './UserById';
import Books from './books/Books';
import CounterWithHooks from './CounterWithHooks';
import NewBook from './books/NewBook';
import EditBook from './books/EditBook';
import Login from './Login';
import BookDetail from './books/BookDetail';
import UserContext from './context/UserContext';
import { useState } from 'react/cjs/react.development';
import userService from './services/userService';

function App() {

    const [isLoggedIn, setLoggedIn] = useState(userService.isLoggedIn());

    return <UserContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/contact" component={Contact} />
                <Route path="/users/:id" component={UserById} />
                <Route path="/users" component={Users} />
                <Route path="/books/:id" component={BookDetail} />
                <Route path="/books/new" component={NewBook} />
                <Route path="/books/:id/update" component={EditBook} />
                <Route path="/books" component={Books} />
                <Route path="/count" component={CounterWithHooks} />
                <Route path="**" component={NotFound} />
                {/* <Redirect to='/' /> */}
            </Switch>
            <Footer />
        </BrowserRouter>
    </UserContext.Provider>
}

export default App;
