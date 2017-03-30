// ACTION CREATORS
// functions that actually produce actions. Our actions are objects with a type property and other information attached
// these objects are dispatched to the store

import {SET_LYRICS} from '../constants';


export const setLyrics = function(text){
	return {
		type: SET_LYRICS,
		lyric: text
	};
};

