import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Shop({match}) {
    return (
        <Router>
            <div>
                <Link to={`${match.url}/categories`}>categories</Link>
                <Route path={`${match.path}/:id`} component={Categories} />
                <h2 className="text-center"> listing pages </h2>
            </div>
        </Router>  
    );
} 

function Categories({ match }) {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to={`${match.url}/fashion`}>fashion</Link>
                        <Route path={`${match.path}/:id`} component={Fashion} />
                    </li>
                    <li><Link to={`${match.url}/kidswear`}>kidswear</Link></li>
                    <li><Link to={`${match.url}/jewellery`}>jewellery</Link></li>
                    <li><Link to={`${match.url}/wedding-gifts-favours`}>wedding-gifts-favours</Link></li>
                </ul>
            </div>
        </Router>
    );
}

function Fashion({match}) {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to={`${match.url}/womenswear`}>womenswear</Link></li>
                    <li><Link to={`${match.url}/accessories`}>accessories</Link></li>
                    <li><Link to ={`${match.url}footwear`}>footwear</Link></li>
                </ul>
            </div>
        </Router>
    )
}

export default Shop;