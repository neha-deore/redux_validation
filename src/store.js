import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';//import store
import createSagaMiddleware from '@redux-saga/core';
import sagaFunction from './reducers/sagaFunction';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaFunction);
export default store;