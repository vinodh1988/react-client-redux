import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux'
import { appstate } from './Redux/reducers/appstate';
import { rootSaga } from './Redux/saga/root';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appstate,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store ={store}><Router><App/></Router></Provider>,document.getElementById("root"))