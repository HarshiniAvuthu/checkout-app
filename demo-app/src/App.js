import React from 'react';
import Main from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => (
	<Provider store={store}>
		<Main/>
	</Provider>
);

export default App;