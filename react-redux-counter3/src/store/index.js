import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

export default store;