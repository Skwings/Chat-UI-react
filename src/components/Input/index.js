import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, Prefix, Suffix, InputContainer } from './style';
import Icon from 'components/Icon';

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { useTheme } from 'styled-components';

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

function Search({ placeholder="请输入搜索内容", prefix, suffix, ...rest }) {
    const theme = useTheme;
    return (
        <Input 
            placeholder={placeholder} 
            prefix={<Icon icon={SearchIcon} 
                color={theme.gray3} 
                height={18} 
                width={18} 
            />} {...rest}>
        </Input>
    )
}

Input.Search = Search;

Input.propTypes = {
    placeholder: PropTypes.string,
    prefix: PropTypes.any,
    suffix: PropTypes.any
};


export default Input;



