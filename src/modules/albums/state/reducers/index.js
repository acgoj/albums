import { combineReducers } from 'redux';
import albumsHorizontalReducer from './albumHorizontal';
import albumsVerticalReducer from './albumVertical';

export const albumsReducer = combineReducers({
  albumsHorizontal: albumsHorizontalReducer,
  albumsVertical: albumsVerticalReducer
});
