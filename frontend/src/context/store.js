import {
  addMotorsReducer,
  deleteMotorsReducer,
  getMotorsReducer,
  updateMotorsReducer,
} from './reducers/motorReducer';
// import { getCurrentUserReducer } from './reducers/userReducer';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const finalReducer = combineReducers({
  //   getCurrentUserReducer: getCurrentUserReducer,
  getMotorsReducer: getMotorsReducer,
  addMotorsReducer: addMotorsReducer,
  updateMotorsReducer: updateMotorsReducer,
  deleteMotorsReducer: deleteMotorsReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
