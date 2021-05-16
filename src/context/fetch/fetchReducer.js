import { GET_RANDOM_PHOTO, SEARCH_PHOTOS, GET_PHOTO, CLEAR_PHOTO, ERROR, SET_LOADING, SET_LOADINGIMAGES } from "../types";

const FetchReducer = (state, action) => {
    switch (action.type) {
        case CLEAR_PHOTO:
            return {
                ...state,
                photo: []
            }
        case GET_RANDOM_PHOTO:
            return {
                ...state,
                loading: false,
                randomPhoto: action.payload.map(({ urls }) => urls)
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
                photosFilterDuplicate: action.payload.results.filter((item, index, self) => self.findIndex(element => (element.title === item.title)) === index),
                photos: action.payload.results,
                totalNumberPhotos: action.payload.total,
                loading: false,
                numbersPagination: [...Array(Math.ceil(action.payload.total / 50)).keys()]
            }

        case ERROR:
            return {
                ...state,
                error: action.payload
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