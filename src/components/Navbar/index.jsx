import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Images, Colors, FontStyles } from '../../constant/index';
import { LocalStorage } from '../../helpers/index';
import {
  Text
} from '../../components/index';
import {
} from '../index';
import {
  Container
} from './style.js';
import * as orderActions from '../../store/order/actions';


const NavbarComponent = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const tokenRedux = useSelector(state => state.order.token);
  const logout = dispatch(orderActions.logout);

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (!tokenRedux) {
      history.push('/login');
    }
  }, [tokenRedux]);

  return (
    <Container>
      <div
        className='logo'
        onClick={ () => { history.push('/'); } }
      >
        <img src={ Images.logoLong } alt='' />
      </div>
      <div
        className='btn-logout'
        onClick={ () => { handleLogout(); } }
      >
        <Text
          styling={ FontStyles.boldM }
          text='Logout'
          color={ Colors.black.default }
        />
      </div>
    </Container>
  );
};

export default NavbarComponent;
