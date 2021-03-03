import styled, { css } from 'styled-components';
import { circle } from 'utils/mixins'

const variants = {
    dot: css`
        position: relative;
        padding: 5px;
        &::after {
            display: ${({ show }) => (show ? "block" : "none")};
            content: "";
            position: absolute;
            ${({ theme }) => circle(theme.red, "6px")};
            right: 0;
            top: 0;
        }
    `,
    default: css`
        display: flex;
        align-items: center;
        justify-content: center;
        ${({ theme }) => circle(theme.red, "26px")};
        box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04),
        0px 6px 12px 0px rgba(0, 0, 0, 0.04);
        ${({showZero, count})  => !showZero && count === 0 && `visibility: hidden` }
    `
}

const Count = styled.div`
    font-size: ${({ theme }) => theme.normal };
    color: white;

`

const StyledBadge = styled.div`
    display: inline-block;
    ${({ variant }) => variants[variant]}
`

export {StyledBadge, Count}

