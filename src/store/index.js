import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import allReducers from '../reducers';

export default createStore(allReducers, applyMiddleware(ReduxThunk));
