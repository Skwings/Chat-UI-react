import styled, { css } from 'styled-components';

const typeVariants = {
    primary: css`
        color: ${({theme}) => theme.grayDark};
    ` ,
    secondary: css`
        color: ${({theme}) => theme.grayDark};
        opacity: 0.3;
    `,
    danger: css`
        color: ${({theme}) => theme.red};
    `
}

const StyledText = styled.div``

export default StyledText

