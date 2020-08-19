import { combineReducers } from 'redux';
import emptyPersonReducer from './isPersonData';
import personListReducer from './isPersonList';

const allReducers = combineReducers({
    isPersonData: emptyPersonReducer,
    isPersonList: personListReducer
})

export default allReducers;