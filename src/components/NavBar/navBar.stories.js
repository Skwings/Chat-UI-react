import React from 'react';
import NavBar, { MenuItem } from '.'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import "styled-components/macro"

export default {
  title: "UI 组件/NavBar",
  component: NavBar,
};

export const Default = () => {
    return <NavBar />
}

export const Menu = () => {
  return (
    <div css={`background: ${({theme}) => theme.darkPurple}; width: 100px;`}>
      <MenuItem showBadge active="true" icon={faCommentDots}></MenuItem>
    </div>
  )
}