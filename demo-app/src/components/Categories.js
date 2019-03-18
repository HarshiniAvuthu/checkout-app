import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Categories({ match }) {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to={`${match.url}/fashion`}>fashion</Link></li>
                    <li><Link to={`${match.url}/kidswear`}>kidswear</Link></li>
                    <li><Link to={`${match.url}/jewellery`}>jewellery</Link></li>
                    <li><Link to={`${match.url}/wedding-gifts-favours`}>wedding-gifts-favours</Link></li>
                </ul>
                <Route path={`${match.path}/:topicId`} component={Topic} />
            </div>
        </Router>
    );
}

function Topic({ match }) {
    return (
        <div>
            <h3> this is :{match.params.topicId}</h3>
        </div>
    );
}

export default Categories;