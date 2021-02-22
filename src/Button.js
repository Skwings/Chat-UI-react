import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`   //tagged templete literals
    width: ${(props) => props.width || "80px"};
    background-color: ${({ theme }) => theme.primaryColor };
`

function Button({ width, handleClick, label, children }) {
    return (
        <div>
            <StyledButton width={width} onClick={handleClick}>
                {label}
                {children}
            </StyledButton>
        </div>

    )
}

export default Button;