import React from 'react';
import PropTypes from 'prop-types';
import Styledtext from './style';

function text({ children, ...rest }){
    return (
        <Styledtext {...rest}>
            {children}
        </Styledtext>
    );
};

text.propTypes = {
    children: PropTypes.any
};


export default text;



