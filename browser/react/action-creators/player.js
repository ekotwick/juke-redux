// ACTION CREATORS
// functions that actually produce actions. Our actions are objects with a type property and other information attached
// these objects are dispatched to the store

import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST } from '../constants';

export const startPlaying = function(){
	return {
		type: START_PLAYING,
	}
}

export const fetchPlaying = function(){
	return function(dispatch, getState) {
		dispatch(startPlaying());
	}
}

export const stopPlaying = function(){
	return {
		type: STOP_PLAYING,
	}
}

export const fetchStopping = function(){
	return function(dispatch, getState) {
		dispatch(stopPlaying());
	}
}

export const setCurrentSong = function(song){
	return {
		type: SET_CURRENT_SONG,
		currentSong: song
	}
}

export const fetchCurrentSong = function(){
	return function(dispatch, getState) {
		dispatch(setCurrentSong());
	}
}

export const setList = function(songList){
	return {
		type: SET_LIST,
		currentSongList: songList
		}
}

export const fetchSongList = function(){
	return function(dispatch, getState) {
		dispatch(setList());
	}
}