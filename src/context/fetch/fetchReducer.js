import { SEARCH_PHOTOS, GET_PHOTO, CLEAR_PHOTO, SET_LOADING, SET_LOADINGIMAGES } from "../types";

const FetchReducer = (state, action) => {
    switch (action.type) {
        case CLEAR_PHOTO:
            return {
                ...state,
                photo: []
            }

        case GET_PHOTO:
            return {
                ...state,
                photo: action.payload,
                loading: false,
            }

        case SEARCH_PHOTOS:
          
            return {
                ...state,
                photos: action.payload,
                loading: false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case SET_LOADINGIMAGES:
            return {
                ...state,
                loadingImages: action.payload,
            }

        default:
            return state
    };
};

export default FetchReducer;