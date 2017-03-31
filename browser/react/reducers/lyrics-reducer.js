// REDUCERS
// a function that receives the previous state *from the store* and an action *from the action creator*. it decides what the future state will be on the basis of this information.
// do not mutate states! 

import {SET_LYRICS} from '../constants';

const initialState = { text: '' };

// use Object.assign to maintain immutability
// if we receive an action whose type we don't recognize, we return the previous state
export default function lyricsReducer (state=initialState, action) {
	switch(action.type) {
		case SET_LYRICS:
			return Object.assign({}, state, { text: action.lyric });
		default: 
			return state;
		}
}