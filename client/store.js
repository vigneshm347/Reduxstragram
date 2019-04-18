import { createStore, compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';

//import root reducer

import rootReducer from './reducers/index';

import comments from './data/comments'
import posts from './data/posts'

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create an object for default data
const defaultState = {
    posts,
    comments

}
const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;