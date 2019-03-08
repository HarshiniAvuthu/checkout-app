import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';

const initialUser = { name: '' };

const store = createStore(combineForms({
    user: initialUser,
}));

export default store;