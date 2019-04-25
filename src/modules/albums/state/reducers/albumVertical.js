import { 
    GET_ALBUMS_VERTICAL_FAILED, 
    GET_ALBUMS_VERTICAL_REQUEST, 
    GET_ALBUMS_VERTICAL_SUCCESS
} from '../../constants';
  
const initialState = {
    albums: [],
    isLoading: false,
    error: null
};

const createAlbumsVerticalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUMS_VERTICAL_FAILED: {
        return {
            ...initialState,
            error: action.payload.error
        };
        }
        case GET_ALBUMS_VERTICAL_REQUEST: {
        return {
            ...initialState,
            isLoading: true
            };
        }
        case GET_ALBUMS_VERTICAL_SUCCESS: {
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
  
export default createAlbumsVerticalReducer;
