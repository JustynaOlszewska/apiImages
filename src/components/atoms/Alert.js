import React, { useContext } from 'react';
import AlertContext from "../../context/alert/alertContext";
import { StylesAlert } from '../../styles/styleComponents/StyledAlert';

const Alert = ({ animation }) => {
    const alertContext = useContext(AlertContext);
    return (
        alertContext?.alert !== null && (
            <StylesAlert animation={animation}>
                {alertContext?.alert?.alert?.msg}
            </StylesAlert>
        )
    );
};

export default Alert;