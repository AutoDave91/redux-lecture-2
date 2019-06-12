import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';

import starWarsReducer from './reducers/starWarsReducer';
import breakingBadReducer from './reducers/breakingBadReducer'

const combinedReducers = combineReducers()

export default createStore(combinedReducers, applyMiddleware(promise));