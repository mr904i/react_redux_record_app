import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import authReducer from './authReducers';
import blogReducer from './blogReducers';
import graphReducer from './graphReducers';

const rootReducer = (history) => combineReducers({
    auth: authReducer,
    article: blogReducer,
    graph: graphReducer,
    router: connectRouter(history)
});

export default rootReducer;