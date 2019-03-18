import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Categories from './Categories';

function Shop({match}) {
    return (
        <Router>
            <div>
                <Link to={`${match.url}/categories`}>categories</Link>
                <Route path={`${match.path}/:id`} component={Categories} />
            </div>
        </Router>  
    );
} 

export default Shop;