import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import rootReducer from './reducers/manageAuthorsAndBooks';

import { combineReducers } from "redux";
import authorsReducer from './reducers/authorsReducer.js';
import booksReducer from './reducers/booksReducer.js';

const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
