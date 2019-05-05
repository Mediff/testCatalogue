import { combineReducers } from 'redux';
import userReducers from './userReducers';
import productReducers from './productReducers';
import reviewReducers from './reviewReducers';

const appReducer = combineReducers({
    userReducers, productReducers, reviewReducers,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
