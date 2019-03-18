import React from 'react';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getAllProducts } from './actions';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  	middleware.push(createLogger());
}

const store = createStore(reducer,applyMiddleware(...middleware))

store.dispatch(getAllProducts())

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)