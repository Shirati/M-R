import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import userReducer from './userStore';
import riddleReducer from './RiddleStore';

import { composeWithDevTools } from '@redux-devtools/extension';

const reducer = combineReducers({
  users: userReducer,
  riddles:riddleReducer,
  //items: itemReducer,
 
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducer, composedEnhancer);


export default store;
