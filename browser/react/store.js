// STORE
// this holds our state; our state is what our reducer function delivers to us

import {createStore, applyMiddleware, combineReducers} from 'redux'; 
// import reducer from './reducers/root-reducer';

import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// importing issues? maybe add braces. or remove them.

import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';

const middleware = createLogger();

const combinedReducers = combineReducers({
	lyrics: lyricsReducer,
	player: playerReducer
});

export default createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(middleware, thunkMiddleware));