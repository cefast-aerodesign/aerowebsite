import styled from '@emotion/styled'
import colors from '../shared/colors'
import { css } from '@emotion/react';

const fonts = css`
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const H1 = styled.h1`
    ${fonts}
    color: ${colors.pale_gray};
    font-size: 48px;
    
`;

const H2 = styled.h2`
    ${fonts}    
    font-size: 36px;
    font-weight: 500;
`;

const H4 = styled.h4`
    ${fonts}
    font-size: 20px;
`;

const P1 = styled.span`
    ${fonts}
    font-size: 18px;
    font-weight: 300;
`;

const P2 = styled.span`
    ${fonts}
    font-size: 16px;
    font-weight: 400;
`;

export {
    H1, H2, H4, P1, P2
}
