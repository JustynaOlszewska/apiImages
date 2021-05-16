import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { StyledForm, StyledContainerInput, StyledInput, StyledIcon, StyledButton, StyledNavLink } from '../../styles/styleComponents/StyledFormPhoto';
import FetchContext from "../../context/fetch/fetchContext";
import AlertContext from "../../context/alert/alertContext";
import ValidationContext from "../../context/validationForm/validationContext";
import { ThemeProvider } from 'styled-components'
const Form = ({ theme }) => {
    const history = useHistory();

    const alertContext = useContext(AlertContext);
    const fetchContext = useContext(FetchContext);
    const validationContext = useContext(ValidationContext);
    const { setAlert } = alertContext || {};
    const { photosFilterDuplicate, setLoadingImages, searchPhotos, currentPage } = fetchContext || {};
    const { value, setText } = validationContext || {};
    useEffect(() => {
        if (value?.length >= 3) {
            searchPhotos(value, currentPage);
        };
        //eslint-disable-next-line
    }, [value, currentPage]);

    const handleClick = () => {
        if (value.length >= 3) {
            setLoadingImages(true)
        } else if (value.length < 3) {
            history.push("/");
            showAlerts();
        };
    };

    const showAlerts = () => {
        !value && setAlert('please enter something', 'light');
        (!photosFilterDuplicate.length && value.length) && setAlert('no photos', 'light');
    };

    const handleChange = e => {
        const valueInput = e.target.value;
        setLoadingImages(false);
        setText(valueInput);
    };

    return (
        <StyledForm>
            <StyledContainerInput >
                <StyledInput name="text" defaultValue="" list="photos" type="text"
                    onChange={handleChange} />
                <datalist id="photos">
                    {photosFilterDuplicate.map((element, index) => <option key={element + index}>{element.title}</option>)}
                </datalist>
                <StyledIcon className="fas fa-search" />
                <ThemeProvider theme={theme}>
                    <StyledButton type="submit" onClick={handleClick}><StyledNavLink to="/main">Show me</StyledNavLink></StyledButton>
                </ThemeProvider>
            </StyledContainerInput>
        </StyledForm>
    );
};

export default Form;