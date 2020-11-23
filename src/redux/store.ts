import {applyMiddleware, combineReducers, createStore, Middleware} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from './Auth/reducer';

const middlewares: Middleware[] = [thunk];

const rootReducer = combineReducers({
  auth: authReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
