import React from 'react';
import face1 from '../../assets/images/face-male-1.jpg'
import {StyledAvatar, StatusIcon, AvatarClip, AvatarImg} from './style.js';

function Avatar(){
    return (
        <StyledAvatar>
            <StatusIcon></StatusIcon>
            <AvatarClip>
                <AvatarImg src={face1} alt=""/>
            </AvatarClip>
        </StyledAvatar>
    );
};


Avatar.propTypes = {

};


export default Avatar;
