import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, Prefix, Suffix, InputContainer } from './style';

/** 
 * 搜索框组件
 * @param placeholder [提示语]
 * @param prefix [前缀图标]
 * @param suffix [后缀图标]
 * */
function Input({ placeholder = "请输入内容...", prefix, suffix, ...rest }) {
    return (
        <InputContainer {...rest} >
            {prefix && <Prefix>{prefix}</Prefix>}
            <StyledInput placeholder={placeholder} />
            {suffix && <Suffix>{suffix}</Suffix>}
        </InputContainer>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    prefix: PropTypes.any,
    suffix: PropTypes.any
};


export default Input;



