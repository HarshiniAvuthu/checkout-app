import React, { Component } from 'react';
import Cart from './CartComponent';
import Checkout from './CheckoutComponent';
import ShippingAddress from './ShippingAddressComponent';
import PaymentDetails from './PaymentDetailsComponent';
import Preview from './PaymentDetailsComponent';
import Thankyou from './ThankyouComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="list-unstyled">
                        <li><Link to='/cart'>Cart</Link></li>
                        <li><Link to='/checkout'>Checkout</Link></li>
                        <li><Link to='/shipping-address'>Shipping Address</Link></li>
                        <li><Link to='/payment-details'>Payment Details</Link></li>
                        <li><Link to='/preview'>Preview</Link></li>
                        <li><Link to='/thank-you'>Thank You</Link></li>
                    </ul>
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/shipping-address" component={ShippingAddress} />
                    <Route path="/payment-details" component={PaymentDetails} />
                    <Route path="/preview" component={Preview} />
                    <Route path="/thank-you" component={Thankyou} />
                </div>
            </Router>
        );
    }
}

export default Main;