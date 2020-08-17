import { combineReducers } from 'redux';
import emptyPersonReducer from './isPersonData';
import personListReducer from './isPersonList';
import isGreyBackground from './isGreyBackground';

const allReducers = combineReducers({
    PersonData: emptyPersonReducer,
    PersonList: personListReducer,
    ColorChanger: isGreyBackground,
})

export default allReducers;