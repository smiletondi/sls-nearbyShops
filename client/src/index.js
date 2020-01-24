import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from './App';
import rootReducer from "./store/reducers/rootReducer";


const store = createStore(rootReducer, applyMiddleware(thunk));

// console.log(store.getState());

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
serviceWorker.unregister();
