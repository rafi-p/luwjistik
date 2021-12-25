import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  CustomInput
} from '../../components/index';
import {
  Container,
} from './style.js';
import {
  Images,
  Colors,
  FontStyles
} from '../../constant/index';
import { convert, LocalStorage, validation } from '../../helpers/index';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';
import * as orderActions from '../../store/order/actions';

const Login = props => {
  const dispatch = useDispatch();
  const [loginInput, setLoginInput] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [passInput, setPassInput] = useState('');
  const [errPass, setErrPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const loginAction = dispatch(orderActions.login);

  const submit = () => {

    let payload = {
      email: loginInput,
      password: passInput
    };

    if (validation.validateEmail(loginInput) && passInput) {
      setLoadingLogin(true);
      loginAction({}, payload)
      .then(res => {
        props.history.push('/');
      })
      .catch(err => {
        console.log({ err });
      })
      .finally(() => {
        setLoadingLogin(false);
      });
    }


    if (!loginInput) {
      setErrEmail('Please fill the email');
    } else if (!validation.validateEmail(loginInput)) {
      setErrEmail('Please use the proper email address');
    }
    if (!passInput) {
      setErrPass('Please fill the password');
    }
  };

  useEffect(() => {
    setErrEmail('');
    setErrPass('');
  }, [loginInput, passInput]);

  return (
    <Container>
      <div className='container-input'>
        <CustomInput
          keyword={ loginInput }
          setKeyword={ setLoginInput }
          placeholder='johndoe@gmail.com'
          textLabel='Email'
          type='text'
          className='inputCustom mb-20'
          width= 'unset'
          errorText = { errEmail }
        />
        <CustomInput
          keyword={ passInput }
          setKeyword={ setPassInput }
          placeholder='••••••••'
          textLabel='Password'
          type='password'
          showPassword={ showPass }
          setShowPassword={ setShowPass }
          className='inputCustom mb-10'
          width= 'unset'
          errorText = { errPass }
          onKeyDown={ submit }
        />
        <div
          className='btn-login'
          onClick={ submit }
        >
          <Text
            styling={ FontStyles.heading3 }
            text='Login'
            color={ Colors.white.default }
          />
        </div>
      </div>
    </Container>
  );
};

export default Login;
