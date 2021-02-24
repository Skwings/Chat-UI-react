import React from 'react';
import StyledIcon from './style';
import PropTypes from 'prop-types';

function Icon({ 
    icon: IconComponents,
    width = 24,
    height = 24,
    color,
    opacity,
    ...rest }){
    return (
        <StyledIcon color={color} opacity={opacity} {...rest}>
            {IconComponents && <IconComponents width={width} height={height} />}
        </StyledIcon>
    );
};

Icon.propTypes = {
    icon: PropTypes.element,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    color: PropTypes.string,
    opacity: PropTypes.string
};


export default Icon;



