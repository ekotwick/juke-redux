// REDUCERS
// a function that receives the previous state *from the store* and an action *from the action creator*. it decides what the future state will be on the basis of this information.
// do not mutate states! 


import {
  START_PLAYING,
  STOP_PLAYING
} from '../constants';

export const initialPlayerState = {
  currentSong: {},
  currentSongList: [],
  isPlaying: false,
  progress: 0
};

export default function playerReducer (state = initialPlayerState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case START_PLAYING:
      newState.isPlaying = true;
      break;

    case STOP_PLAYING:
      newState.isPlaying = false;
      break;

    case SET_CURRENT_SONG:
      newState.currentSong = song
      break;

    case SET_LIST:
      newState.currentSongList = songList
      break;
      
    default:
      return state;

  }

  return newState;

}