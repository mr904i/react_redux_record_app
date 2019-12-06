import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore} from 'redux';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';
import thunk from "redux-thunk"
import {Provider} from 'react-redux'

const history=createBrowserHistory();
const store = createStore(
    rootReducer(history),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
        process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>
, document.getElementById('root'));
//process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f,
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
