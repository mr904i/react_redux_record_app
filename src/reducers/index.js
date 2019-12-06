import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import authReducer from './authReducers';
import todoReducer from './todoReducers';

const rootReducer = (history) => combineReducers({
    auth: authReducer,
    todo: todoReducer,
    router: connectRouter(history)
});

export default rootReducer;