import search from './search-reducer';
import data from './data-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    search,
    data
});
export default rootReducer;