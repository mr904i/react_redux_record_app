import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import authReducer from './authReducers';
import blogReducer from './blogReducers';

const rootReducer = (history) => combineReducers({
    auth: authReducer,
    article: blogReducer,
    router: connectRouter(history)
});

export default rootReducer;