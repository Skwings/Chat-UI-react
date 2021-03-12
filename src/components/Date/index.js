import React from 'react';
import PropTypes from 'prop-types';
import StyledDate from './style';

function Date({ children, ...rest }){
    return (
        <StyledDate {...rest}>
            {children}
        </StyledDate>
    );
};

Date.propTypes = {
    children: PropTypes.any
};


export default Date;



