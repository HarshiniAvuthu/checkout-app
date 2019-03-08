import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input , Button, Row, Col } from 'reactstrap';
import { Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        event.preventDefault();
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
    }

    render() {
        return (
        <div class="container">
            <div class="text-center">
                <p class="lead">Checkout page</p>
            </div>
            <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Your cart</span>
                        <span class="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Product name</h6>
                            <small class="text-muted">Brief description</small>
                        </div>
                        <span class="text-muted">$12</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Second product</h6>
                            <small class="text-muted">Brief description</small>
                        </div>
                        <span class="text-muted">$8</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Third item</h6>
                            <small class="text-muted">Brief description</small>
                        </div>
                        <span class="text-muted">$5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between bg-light">
                        <div class="text-success">
                            <h6 class="my-0">Promo code</h6>
                            <small>EXAMPLECODE</small>
                        </div>
                        <span class="text-success">-$5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </li>
                    </ul>
                    <form class="card p-2">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Promo code"/>
                            <div class="input-group-append">
                                <button type="submit" class="btn btn-secondary">Redeem</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-8 order-md-1">
                    <Form onSubmit={this.handleLogin}>
                        <h3 class="h3 mb-3 font-weight-normal">Please sign in</h3>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Control.text model=".email" id="email" name="eamil" 
                                placeholder="Email" className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}/>
                                <Errors className="text-danger" model=".email"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Control.text model=".Password" id="Password" name="Password" 
                                placeholder = "Password" className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}/>
                                <Errors className="text-danger" model = ".Password"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                }}/>
                        </FormGroup>
                        <div class="checkbox mb-3 ml-3">
                            <Label>
                                <Input type="checkbox" value="remember-me"/> Remember me
                            </Label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <div className="mt-3" outline onClick={this.toggleModal}>
                            <span>New customer want to sign up</span>
                        </div>
                    </Form>
                </div>
            </div>
            <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                <ModalHeader toggle = {this.toggleModal}>Sign up</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Name</Label>
                            <Control.text model=".name" id="name" name="name" 
                                placeholder="name" className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}/>
                                <Errors className="text-danger" model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="username">email</Label>
                            <Control.text model=".email" id="email" name="email" 
                                placeholder="email" className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}/>
                                <Errors className="text-danger" model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Control.text model=".password" id="password" name="password" 
                                placeholder="password" className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}/>
                                <Errors className="text-danger" model=".password"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">confirm Password</Label>
                            <Control.text model=".conpassword" id="conpassword" name="conpassword" 
                                placeholder="confirm password" className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}/>
                                <Errors className="text-danger" model=".conpassword"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                }}/>
                        </FormGroup>
                        <Button type="submit" value="submit" className="bg-primary" color="primary">Sign up</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
        )
    }
}

export default Checkout;