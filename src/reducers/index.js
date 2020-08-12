import {combineReducers} from 'redux';
import emptyPersonReducer from './isPersonData';

const allReducers= combineReducers({
    isPersonData: emptyPersonReducer,
})

export default allReducers;