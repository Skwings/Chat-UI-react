import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavBar, StyledMenuItem, MenuIcon, MenuItems } from './style';
import Badge from 'components/Badge';
import Avatar from 'components/Avatar';
import "styled-components/macro"

import profileImage from 'assets/images/face-male-1.jpg'
import { faCommentDots, faFolder, faUsers, faStickyNote, faEllipsisH, faCog} from '@fortawesome/free-solid-svg-icons'

/** 
 * 侧导航组件
 * */ 
function NavBar({ children, ...rest }){
    return (
        <StyledNavBar {...rest}>
            <Avatar src={profileImage} status="online" />
            <MenuItems>
                <MenuItem showBadge active="true" icon={faCommentDots} />
                <MenuItem icon={faUsers} />
                <MenuItem icon={faFolder} />
                <MenuItem icon={faStickyNote} />
                <MenuItem icon={faEllipsisH} />
                <MenuItem icon={faCog} css={`align-self:end;`} />
            </MenuItems>
        </StyledNavBar>
    );
};

/** 
 * 菜单项组件
 * @param icon [徽章组件]
 * @param active [是否激活]
 * @param showBadge [是否展示未读红点]
 * */ 
function MenuItem({ icon, active, showBadge, ...rest }) {
    return (
        <StyledMenuItem active={active} {...rest}>
            <a href="/#">
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon} ></MenuIcon>
                </Badge>
            </a>
        </StyledMenuItem>
    );
}

NavBar.propTypes = {
    children: PropTypes.any
};

export default NavBar;

export { MenuItem }



