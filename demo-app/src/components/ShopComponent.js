import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ShopComponent({match}) {
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

function Categories({match}) {
    return(
        <Router>
            <div>
                <ul>
                    <li><Link to={`${match.url}/fashion`}>fashion</Link></li>
                    <li><Link to={`${match.url}/kidswear`}>kidswear</Link></li>
                    <li><Link to={`${match.url}/jewellery`}>jewellery</Link></li>
                    <li><Link to={`${match.url}/wedding-gifts-favours`}>wedding gifts favours</Link></li>
                </ul>
                <Route path={`${match.path}/:id`} component={Fashion}/>
                <Route path="/kidswear"/>
                <Route path={`${match.path}/:id`} component={Jewellery}/>
                <Route path="/wedding-gifts-favours"/>
            </div>
        </Router>
    )
}

function Fashion({match}) {
    return (
        <div>
            <ul>
                <li><Link to={`${match.url}/womenswear`}>womenswear</Link></li>
                <li><Link to={`${match.url}/accessories`}>accessories</Link></li>
                <li><Link to={`${match.url}/footwear`}>footwear</Link></li>
            </ul>
        </div>
    );
}

function Jewellery({match}) {
    return (
        <div>
            <ul>
                <li><Link to={`${match.url}/earring`}>Earring</Link></li>
                <li><Link to={`${match.url}/necklace`}>Necklace</Link></li>
                <li><Link to={`${match.url}/headjewellery`}>headjewellery</Link></li>
                <li><Link to={`${match.url}/bracelete`}>Bracelete</Link></li>
            </ul>
        </div>
    )
}

export default ShopComponent;