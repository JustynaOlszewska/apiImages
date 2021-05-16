import React, { useReducer } from 'react';
import FetchContext from "./fetchContext";
import FetchReducer from "./fetchReducer";
import axios from "axios";
import { GET_RANDOM_PHOTO, SEARCH_PHOTOS, GET_PHOTO, CLEAR_PHOTO, ERROR, SET_LOADING, SET_LOADINGIMAGES } from "../types"

const FetchState = props => {
    const initialState = {
        randomPhoto: null,
        photosFilterDuplicate: [],
        photos: [],
        loading: false,
        loadingImages: false,
        photo: [],
        numbersPagination: [],
        totalNumberPhotos: null,
        error: []
    };

    const [state, dispatch] = useReducer(FetchReducer, initialState);

    const getRandomPhoto = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`https://api.unsplash.com/photos/random?count=1&client_id=yhDIca96_nzfQlbE1tg2G5boMXKf7dYH6YXIV_EXHls`);
            dispatch({
                type: GET_RANDOM_PHOTO,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }
    };

    const searchPhotos = async (text, pageNumber = 1, perPageNumber = 50) => {
        try {
            setLoading(true);
            const res = await axios.get(`https://api.unsplash.com/search/collections?query=${text}&page=${pageNumber}&per_page=${perPageNumber}&client_id=yhDIca96_nzfQlbE1tg2G5boMXKf7dYH6YXIV_EXHls`)
            dispatch({
                type: SEARCH_PHOTOS,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }
    };

    const getPhoto = async (id) => {
        try {
            const res = await axios.get(`https://api.unsplash.com/collections/${id}?client_id=yhDIca96_nzfQlbE1tg2G5boMXKf7dYH6YXIV_EXHls`);
            dispatch({
                type: GET_PHOTO,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }
    };

    const clearPhoto = () => {
        dispatch({
            type: CLEAR_PHOTO,
        })
    };

    const setLoading = () => dispatch({ type: SET_LOADING });

    const setLoadingImages = (bool) => dispatch({ type: SET_LOADINGIMAGES, payload: bool });

    return <FetchContext.Provider value={{ error: state.error, randomPhoto: state.randomPhoto, numbersPagination: state.numbersPagination, totalNumberPhotos: state.totalNumberPhotos, photos: state.photos, photo: state.photo, photosFilterDuplicate: state.photosFilterDuplicate, loadingImages: state.loadingImages, loading: state.loading, getRandomPhoto, searchPhotos, getPhoto, clearPhoto, setLoadingImages }}> {props.children}</FetchContext.Provider>
};

export default FetchState;