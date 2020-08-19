import { combineReducers } from 'redux';
import emptyPersonReducer from './isPersonData';
import personListReducer from './isPersonList';
import isGreyBackground from './isGreyBackground';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
    PersonData: emptyPersonReducer,
    PersonList: personListReducer,
    ColorChanger: isGreyBackground,
    form: formReducer
})

export default allReducers;