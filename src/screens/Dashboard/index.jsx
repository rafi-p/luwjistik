import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
} from '../../components/index';
import {
  Container,
} from './style.js';
import {
  Images,
  Colors,
  FontStyles
} from '../../constant/index';
import { convert, LocalStorage } from '../../helpers/index';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

const Dashboard = props => {
  const dispatch = useDispatch();


  return (
    <Container>
      INI DASHBOARD
    </Container>
  );
};

export default Dashboard;
