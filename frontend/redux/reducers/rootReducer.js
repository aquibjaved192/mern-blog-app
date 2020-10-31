import signupReducer from './signupReducer';
import createBlogReducer from './createBlogReducer';
import getBlogReducer from './getBlogReducer';
import getSearchReducer from './getSearchReducer';
import userProfileReducer from './userProfileReducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
 signup: signupReducer,
 createBlog: createBlogReducer,
 getBlog: getBlogReducer,
 userProfile: userProfileReducer,
 searchData: getSearchReducer,
 form: formReducer,
});

export default rootReducer;
