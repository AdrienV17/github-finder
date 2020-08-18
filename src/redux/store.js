import {logger} from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './root-saga';

const sagaMiddleWare = createSagaMiddleWare()
const middlewares = [sagaMiddleWare]


if (process.env.NODE_ENV==='development') middlewares.push(logger)


export const store = createStore(rootReducer,applyMiddleware(...middlewares))

sagaMiddleWare.run(rootSaga)