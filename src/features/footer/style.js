import styled from '@emotion/styled';
import colors from '../../shared/colors'
import  Button from "@mui/material/Button"

const FooterContainer = styled.div`
    background-color: ${colors.gray_dark};
    padding: 72px 64px; 
    width: calc(100vw - 128px);
    height: 100%;
    margin: 0;
    color: ${colors.pale_gray};
`;

const SeeMapButton = styled(Button)`
    color: ${colors.gray_dark};
    text-transform: capitalize;
    background-color: ${colors.pale_gray};    
    .MuiButtonBase-root-MuiButton-root:hover {
        background-color: ${colors.gray_medium};    
    }
`;  

export {FooterContainer, SeeMapButton}