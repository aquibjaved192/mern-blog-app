import signupReducer from './signupReducer';
import createBlogReducer from './createBlogReducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
 signup: signupReducer,
 createBlog: createBlogReducer,
 form: formReducer,
});

export default rootReducer;
