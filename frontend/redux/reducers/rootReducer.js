import signupReducer from './signupReducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
 signup: signupReducer,
 form: formReducer,
});

export default rootReducer;
