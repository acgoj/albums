import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { albumsReducer } from '../modules/albums/state/reducers';

const middlewares = [thunk];

const reducers = combineReducers({
    albums: albumsReducer
});

const store = createStore(reducers, applyMiddleware(...middlewares));

export { store };
