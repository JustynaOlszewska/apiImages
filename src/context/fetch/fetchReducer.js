import { TypeTask } from "../types";

const FetchReducer = (state, action) => {
    switch (action.type) {
        case TypeTask.CLEAR_PHOTO:
            return {
                ...state,
                photo: []
            }
        case TypeTask.GET_RANDOM_PHOTO:
            return {
                ...state,
                loading: false,
                randomPhoto: action.payload.map(({ urls }) => urls)
            }
        case TypeTask.GET_PHOTO:
            return {
                ...state,
                photo: action.payload,
                loading: false,
            }

        case TypeTask.SEARCH_PHOTOS:
            return {
                ...state,
                photosFilterDuplicate: action.payload.results.filter((item, index, self) => self.findIndex(element => (element.title === item.title)) === index),
                photos: action.payload.results,
                totalNumberPhotos: action.payload.total,
                loading: false,
                numbersPagination: [...Array(Math.ceil(action.payload.total / 50)).keys()]
            }

        case TypeTask.ERROR:
            return {
                ...state,
                error: action.payload
            }

        case TypeTask.SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case TypeTask.SET_LOADINGIMAGES:
            return {
                ...state,
                loadingImages: action.payload,
            }

        default:
            return state
    };
};

export default FetchReducer;