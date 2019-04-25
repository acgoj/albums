import { 
    GET_ALBUMS_HORIZONTAL_FAILED, 
    GET_ALBUMS_HORIZONTAL_REQUEST, 
    GET_ALBUMS_HORIZONTAL_SUCCESS 
} from '../../constants';
  
const initialState = {
    albums: [],
    isLoading: false,
    error: null
};

const createAlbumsHorizontalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUMS_HORIZONTAL_FAILED: {
        return {
            ...initialState,
            error: action.payload.error
        };
        }
        case GET_ALBUMS_HORIZONTAL_REQUEST: {
        return {
            ...initialState,
            isLoading: true
            };
        }
        case GET_ALBUMS_HORIZONTAL_SUCCESS: {
        return {
            ...initialState,
            albums: action.payload.albums
            };
        }
        default: {
        break;
        }
    }
    return state;
};
  
export default createAlbumsHorizontalReducer;
