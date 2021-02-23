import styled from 'styled-components';

const StyledAvatar = styled.div`
    position: relative;
`;

const StatusIcon = styled.div`
    position: absolute;
    left: 2px;
    top: 4px;

    &::before{
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: white;
    }
    &::after{

    }
`;

const AvatarClip = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden; 
`;

const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export {StyledAvatar, StatusIcon, AvatarClip, AvatarImg}

