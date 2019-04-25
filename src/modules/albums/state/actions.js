import { getAlbums } from '../services';
import { 
    GET_ALBUMS_HORIZONTAL_FAILED,
    GET_ALBUMS_HORIZONTAL_REQUEST,
    GET_ALBUMS_HORIZONTAL_SUCCESS,
    GET_ALBUMS_VERTICAL_FAILED,
    GET_ALBUMS_VERTICAL_REQUEST,
    GET_ALBUMS_VERTICAL_SUCCESS
} from '../constants';

const getAlbumsHorizontal = () => async dispatch => {
    dispatch({
        type: GET_ALBUMS_HORIZONTAL_REQUEST
    });
    try {
        const albums = await getAlbums();

        dispatch({
            type: GET_ALBUMS_HORIZONTAL_SUCCESS,
            payload: { albums }
        });
    } catch (error) {
        dispatch({
            type: GET_ALBUMS_HORIZONTAL_FAILED,
            payload: { error }
        });
    }
};


const getAlbumsVertical = () => async dispatch => {
    dispatch({
        type: GET_ALBUMS_VERTICAL_REQUEST
    });
    try {
        const albums = await getAlbums();

        dispatch({
            type: GET_ALBUMS_VERTICAL_SUCCESS,
            payload: { albums }
        });
    } catch (error) {
        dispatch({
            type: GET_ALBUMS_VERTICAL_FAILED,
            payload: { error }
        });
    }
};

export { getAlbumsHorizontal, getAlbumsVertical };
