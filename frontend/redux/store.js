import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import reducer from './reducers/rootReducer';

// create a makeStore function
const makeStore = (context) => createStore(reducer, {}, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
