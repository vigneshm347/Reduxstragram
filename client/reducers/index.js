import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './post'
import comments from './comment'

const rootReducer = combineReducers({posts: posts, comments: comments, routing: routerReducer});

export default rootReducer;