import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Users from './Users';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import UserById from './UserById';

function App() {
    return <div>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/users/:id" component={UserById} />
                <Route path="/users" component={Users} />
                {/* <Redirect to='/' /> */}
                <Route path="**" component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    </div>
}

export default App;
