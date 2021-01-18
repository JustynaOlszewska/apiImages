import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

export const useStyles = makeStyles({
    input: {
        background: 'linear-gradient(45deg, rgba(255, 142, 83,0.5) 30%, rgba(0,0,0,0.5) 90%)',
    },

});

export const StyledForm = styled.div`
display: flex;
width: 70%;
justify-content: center;
& > button {
background-color: rgba(255, 142, 83,0.5);
& *{
color: #454441;
text-decoration: none;
};
};
`;
