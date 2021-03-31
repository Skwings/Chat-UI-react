import React from 'react';
import PropTypes from 'prop-types';
import StyledText from './style';

function Text({ children, type, size, bold, ...rest }) {
    return (
        <StyledText {...rest}>
            {children}
        </StyledText>
    );
};

Text.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf(["primary", "secondary", "danger"]),
    size: PropTypes.oneOf([
        "xxsmall",
        "xsmall",
        "small",
        "normal",
        "medium",
        "large",
        "xlarge",
        "xxlarge",
    ]),
    bold: PropTypes.bool
};


export default Text;



