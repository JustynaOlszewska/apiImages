import React, { useContext, useEffect, useRef, useState } from 'react';
import { useRouteMatch } from "react-router-dom";
import { StyledForm, StyledContainerInput, StyledInput, StyledIcon, StyledButton, StyledNavLink } from '../../../styles/styleComponents/StyledFormPhoto';
import FetchContext from "../../../context/fetch/fetchContext";
import AlertContext from "../../../context/alert/alertContext";
import ValidationContext from "../../../context/validationForm/validationContext";
import PaginateContext from "../../../context/paginate/paginateContext";
import { ThemeProvider } from "styled-components";
const Alert = (React as any).lazy(() => import("../../atoms/alert/Alert"));

type AlertProps = {
    setAlert: (msg: string, style: string) => void;
};
type PhotosProps = {
    photosFilterDuplicate: Array<Title>;
    setLoadingImages: (boll: boolean) => void;
    searchPhotos: (value: string, currentPage: number) => Promise<void>;
};
type Title = {
    title: string
};
type ValidationProps = {
    value: string;
    setText: (value: string | null) => void;
};
type PageProps = {
    currentPage: number;
};
type ThemeProps = {
    theme: {
    col: string;
    bg: string;
  };
};
const Form= ({ theme }: ThemeProps) => {
    const match = useRouteMatch();
    const myRef= useRef<HTMLButtonElement>(null);
    const [animation, setAnimation] = useState<boolean>(false);
    const alertContext = useContext(AlertContext);
    const fetchContext = useContext(FetchContext);
    const validationContext = useContext(ValidationContext);
    const paginateContext = useContext(PaginateContext);

    const { setAlert }: AlertProps = alertContext || {};
    const { photosFilterDuplicate, setLoadingImages, searchPhotos }: PhotosProps = fetchContext || {};
    const { value, setText }: ValidationProps = validationContext || {};
    const { currentPage }: PageProps = paginateContext || {};
    console.log("thrme", photosFilterDuplicate.map(element => element));
    useEffect((): void => {
        if (value?.length >= 3) {
            searchPhotos(value, currentPage);
        }
        //eslint-disable-next-line
    }, [value, currentPage]);

    useEffect((): void => {
        if (localStorage.getItem("valueInput") !== null) {
            const valueStarge = localStorage.getItem("valueInput");
            setText(valueStarge);
        }
        //eslint-disable-next-line
    }, []);

    const handleClick = (): void => {
        setAnimation(true);
        if (value.length >= 3) {
            setLoadingImages(true);
            setText("");
        } else if (value.length < 3) {
            showAlerts();
            disabledButton(true);
        }
        localStorage.removeItem("valueInput");
    };

    const disabledButton = (bool: boolean): void => {
        myRef.current && (myRef.current.disabled = bool);
        setTimeout(() => {
            myRef.current && (myRef.current.disabled = false);
            setAnimation(false);
        }, 5000);
    };

    const showAlerts = (): void => {
        (value.length === 0) && setAlert('please enter something', 'light');
        value && setAlert('minimum 3 characters', 'light')
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const valueInput: string = e.target.value;
        localStorage.setItem("valueInput", valueInput);
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
                        {photosFilterDuplicate.map((element, index) => <option key={`${element}+${index}`}>{element.title}</option>)}
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