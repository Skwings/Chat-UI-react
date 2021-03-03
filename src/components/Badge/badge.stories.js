import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Badge from '.'

export default {
  title: "UI 组件/Badge",
  component: Badge,
};

export const Default = () => {
    return <Badge count={5} />
}

export const Default0 = () => {
  return <Badge count={0} showZero />
}

export const DotVariant = () => {
  return <Badge variant='dot' show >
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: '24px' }} />
  </Badge>
}
