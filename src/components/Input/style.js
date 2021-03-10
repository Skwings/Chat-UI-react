import styled from 'styled-components';

const StyledInput = styled.div`

`

const Prefix = styled.div`

`

const Suffix = styled.div`

`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    background: ${({theme}) => theme.gray2};
    border-radius: 24px;
    padding: 0 30px;
`

export { StyledInput, Prefix, Suffix, InputContainer}

