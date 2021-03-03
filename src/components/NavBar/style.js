import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StatusIcon, StyledAvatar } from 'components/Avatar/style';
import styled from 'styled-components';
import { activeBar } from 'utils/mixins';

const StyledNavBar = styled.nav`
    display: grid;
    grid-template-rows: 1fr 4fr;
    width: 100px;
    height: 100vh;
    background: ${({theme}) => theme.darkPurple};
    padding: 30px 0;

    ${StyledAvatar} {
        justify-self: center;
        ${StatusIcon} {
            &::before{
                background: ${({theme}) => theme.darkPurple};
            }
        }
    }
`

const StyledMenuItem = styled.div`
    & > a{
        width: 100%;
        height: 74px;
        display: flex;
        justify-content: center;
        align-items: center;

        ${activeBar()};
        ${({ active }) => ( active ? "" : `&::before, &::after {height: 0}`)};
    }
`

const MenuIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 24px;
    opacity: ${({active}) => active ? 1 : 0.3 };
`

const MenuItems = styled.div`
    display: grid;
    grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`;

export {StyledNavBar, StyledMenuItem, MenuIcon, MenuItems} 

