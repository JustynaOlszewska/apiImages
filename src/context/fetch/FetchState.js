import React, { useReducer } from 'react';
import FetchContext from "./fetchContext";
import FetchReducer from "./fetchReducer";
import axios from "axios";
import { SEARCH_PHOTOS, GET_PHOTO, CLEAR_PHOTO, SET_LOADING, SET_LOADINGIMAGES } from "../types"

const GithubState = props => {
    const initialState = {
        photos: [],
        loading: false,
        loadingImages: false,
        photo: [],
    };

    const [state, dispatch] = useReducer(FetchReducer, initialState);

    const searchPhotos = async (text) => {

        setLoading(true);

        const res = await axios.get(`https://api.unsplash.com/search/collections?query=${text}&client_id=yhDIca96_nzfQlbE1tg2G5boMXKf7dYH6YXIV_EXHls`)

        dispatch({
            type: SEARCH_PHOTOS,
            payload: res.data.results
        });

    };

    const getPhoto = async (id) => {

        const res = await axios.get(`https://api.unsplash.com/collections/${id}?client_id=yhDIca96_nzfQlbE1tg2G5boMXKf7dYH6YXIV_EXHls`);

        dispatch({
            type: GET_PHOTO,
            payload: res.data
        })
    };

    const clearPhoto = () => {

        dispatch({
            type: CLEAR_PHOTO,
        })

    };

    const setLoading = () => dispatch({ type: SET_LOADING });

    const setLoadingImages = (bool) => dispatch({ type: SET_LOADINGIMAGES, payload: bool });

    return <FetchContext.Provider value={{ photo: state.photo, photos: state.photos, loadingImages: state.loadingImages, loading: state.loading, searchPhotos, getPhoto, clearPhoto, setLoadingImages }}> {props.children}</FetchContext.Provider>
};

export default GithubState;