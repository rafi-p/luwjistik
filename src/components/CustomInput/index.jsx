import React, { useState, useEffect } from 'react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

import { Images, Colors, FontStyles } from '../../constant';
import { Text } from '../../components';

import { TextInput, Container } from './style';

const CustomInput = props => {
  const [textFocus, setTextFocus] = useState(false);

  const handleKeyDown = e => {
    if (props.onKeyDown && e.key === 'Enter') {
      props.onKeyDown();
    } else {
      return {};
    }
  };

  const onChange = e => {
    let re = /^[\d]+$/;
    const valid = props.validNumber || props.validAlpha;

    if (props.validNumber) {
      re = /^[0-9]+$/i;
    }
    if (props.validAlpha) {
      re = /^[a-zA-Z ]*$/i;
    }

    if ((e.target.value === '' || re.test(e.target.value))) {
      props.setKeyword(e.target.value);
    }

    if (!valid) {
      props.setKeyword(e.target.value);
    }

    // props.setKeyword(e.target.value);
  };

  return (
    <Container
      className={ props.className }
    >
      <Text
        styling={ FontStyles.mediumS }
        text={ props.textLabel }
        className='mb-5'
      />

      <TextInput
        textFocus={ textFocus }
        onFocus={ () => setTextFocus(true) }
        onBlur={ () => setTextFocus(false) }
        height={ props.height }
        width={ props.width }
        bg={ props.bg }
        error={ props.errorText }
      >
        <input
          value={ props.keyword }
          onChange={ e => onChange(e) }
          type={
            props.showPassword
            ? 'text'
            : props.type
              ? props.type
              : 'password'
          }
          placeholder={ props.placeholder }
          onKeyDown={ e => handleKeyDown(e) }
        />
        {
          props.type === 'password' &&
          <img
            src={ props.showPassword ? Images.openEyeBlack : Images.openEyeGrey }
            className='eye'
            alt=''
            onClick={ () => props.setShowPassword(!props.showPassword) }
          />
        }
      </TextInput>

      {
        props.errorText &&
        <Text
          styling={ FontStyles.mediumS }
          text={ props.errorText }
          color={ Colors.red.default }
          className='mt-8'
        />
      }
    </Container>
  );
};

export default CustomInput;
