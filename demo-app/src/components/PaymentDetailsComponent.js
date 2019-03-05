import React from 'react';

function PaymentDetails(props) {
    return(
        <div class="container">
            <div class="row">
                <div class="col-md-8 order-md-1">
                    <h4 class="mb-3">Payment</h4>
                    <form class="needs-validation" noValidate>
                        <div class="d-block my-3">
                            <div class="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required/>
                                <label class="custom-control-label" htmlFor="credit">Credit card</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required/>
                                <label class="custom-control-label" htmlFor="debit">Debit card</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required/>
                                <label class="custom-control-label" htmlFor="paypal">PayPal</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label htmlFor="cc-name">Name on card</label>
                                <input type="text" class="form-control" id="cc-name" placeholder="" required/>
                                <small class="text-muted">Full name as displayed on card</small>
                                <div class="invalid-feedback">
                                Name on card is required
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label htmlFor="cc-number">Credit card number</label>
                                <input type="text" class="form-control" id="cc-number" placeholder="" required/>
                                <div class="invalid-feedback">
                                Credit card number is required
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 mb-3">
                                <label htmlFor="cc-expiration">Expiration</label>
                                <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
                                <div class="invalid-feedback">
                                Expiration date required
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label htmlFor="cc-cvv">CVV</label>
                                <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
                                <div class="invalid-feedback">
                                Security code required
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-lg btn-block" type="submit">Continue</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails;