import React, { useContext, useEffect, lazy, useRef, useState } from 'react';
import { useRouteMatch } from "react-router-dom";
import { StyledForm, StyledContainerInput, StyledInput, StyledIcon, StyledButton, StyledNavLink } from '../../styles/styleComponents/StyledFormPhoto';
import FetchContext from "../../context/fetch/fetchContext";
import AlertContext from "../../context/alert/alertContext";
import ValidationContext from "../../context/validationForm/validationContext";
import PaginateContext from "../../context/paginate/paginateContext";
import { ThemeProvider } from 'styled-components';
const Alert = lazy(() => import('../atoms/Alert'));

const Form = ({ theme }) => {
    const match = useRouteMatch();
    const myRef = useRef();
    const [animation, setAnimation] = useState(false);
    const alertContext = useContext(AlertContext);
    const fetchContext = useContext(FetchContext);
    const validationContext = useContext(ValidationContext);
    const paginateContext = useContext(PaginateContext);

    const { setAlert } = alertContext || {};
    const { photosFilterDuplicate, setLoadingImages, searchPhotos } = fetchContext || {};
    const { value, setText } = validationContext || {};
    const { currentPage } = paginateContext || {};

    useEffect(() => {
        if (value?.length >= 3) {
            searchPhotos(value, currentPage);
        }
        //eslint-disable-next-line
    }, [value, currentPage]);

    const handleClick = () => {
        setAnimation(true);
        if (value.length >= 3) {
            setLoadingImages(true);
            setText("");
        } else if (value.length < 3) {
            showAlerts();
            disabledButton(true);
        }
    };

    const disabledButton = (bool) => {
        myRef.current.disabled = bool;
        setTimeout(() => {
            myRef.current && (myRef.current.disabled = false);
            setAnimation(false);
        }, 5000);
    };

    const showAlerts = () => {
        (value.length === 0) && setAlert('please enter something', 'light');
        value && setAlert('minimum 3 characters', 'light')
    };

    const handleChange = e => {
        const valueInput = e.target.value;
        setLoadingImages(false);
        setText(valueInput);
    };

    return (
        <>
            <StyledForm>
                <StyledContainerInput >
                    <StyledInput name="text" list="photos" type="text"
                        onChange={handleChange} value={value} />
                    <datalist id="photos">
                        {photosFilterDuplicate.map((element, index) => <option key={element + index}>{element.title}</option>)}
                    </datalist>
                    <StyledIcon className="fas fa-search" />
                    <ThemeProvider theme={theme}>
                        <StyledButton ref={myRef} type="submit" onClick={handleClick} disabled={myRef?.current?.disabled}><StyledNavLink to={(value.length < 3 || !value) && (match.path === "/" || match.path === "/apiImages") ? "/" : "/main"} >Show me</StyledNavLink></StyledButton>
                    </ThemeProvider>
                </StyledContainerInput>
            </StyledForm>
            <Alert animation={animation} />
        </>
    );
};

export default Form;