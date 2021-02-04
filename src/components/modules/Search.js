import React, { lazy, useEffect, useContext, useState } from 'react';
import {
    NavLink
} from "react-router-dom";

import { useStyles, StyledForm } from '../../styles/styleComponents/StyledInput';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import FetchContext from "../../context/fetch/fetchContext";
import AlertContext from "../../context/alert/alertContext";

const Alert = lazy(() => import('../../components/organism/Alert'));

const Search = () => {

    const [text, setText] = useState('');
    const fetchContext = useContext(FetchContext);
    const alertContext = useContext(AlertContext);

    const classes = useStyles();

    useEffect(() => {
        if (text.length >= 3) {
            fetchContext.setLoadingImages(false);
            fetchContext.searchPhotos(text);
        };
        //eslint-disable-next-line
    }, [text]);

    const handleClick = (e) => {
        e.preventDefault();
        if (text === "") alertContext.setAlert('please enter something', 'light');
        fetchContext.setLoadingImages(true);
        setText("")
    };

    const handleChange = e => {
        setText(e.target.value);
    };

    return (
        <>
            <h1>Search photos</h1>
            <Alert />
            <StyledForm>
                <Autocomplete
                    id="search-photo"
                    options={[...new Set(fetchContext.photos.map((element) => element.title))]}
                    getOptionLabel={(option) => option}
                    ListboxProps={{
                        style: {
                            position: "absolute",
                            top: 10,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            height: 100,
                            width: "100%",
                            overflowY: "auto",
                            background: 'linear-gradient(45deg, rgba(255, 142, 83,0.5) 30%, rgba(0,0,0,0.5) 90%)',
                        },
                    }}
                    style={{ width: '200px' }}
                    renderInput={(params) => <TextField value={text} onChange={handleChange} className={classes.input} id="filled-basic" {...params} label="Search" variant="filled" />}
                />
                <button type="submit" onClick={handleClick}><NavLink to='/main'>Show me</NavLink></button>
            </StyledForm>
        </>
    );
};

export default Search;