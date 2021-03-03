import React from 'react';
import Icon from '.'
import {ReactComponent as SmileIcon} from 'assets/icons/smile.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faStickyNote, faFolder } from  '@fortawesome/free-solid-svg-icons'

export default {
  title: "UI 组件/Icon",
  component: Icon,
};

export const Default = () => {
    return <Icon icon={SmileIcon} />
}

export const CustomColor = () => {
  return <Icon icon={SmileIcon} color="#ccc" />
}

export const CustomSize = () => {
  return <Icon icon={SmileIcon} width='48' height='48' color='#ccc' />
}

export const FontAwesome = () => {
  return <FontAwesomeIcon icon={faCommentDots} />
}

export const FontAwesomeColor = () => {
  return <FontAwesomeIcon icon={faCommentDots} style={{ color: '#ccc' }} />
}

export const FontAwesomeSize = () => {
  return <div>
    <FontAwesomeIcon icon={faFolder} style={{ fontSize: '24px' }} />
    <FontAwesomeIcon icon={faStickyNote} style={{ fontSize: '36px' }} />
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: '48px' }} />
  </div> 
}