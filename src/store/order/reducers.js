import actionTypes from './actionTypes';
import { LocalStorage } from '../../helpers';

const initialState = {
  data: [],
  loadingList: false,
  loadingAdd: false,
  token: LocalStorage.getToken() ?? '',
  email: ''
};

const setOrderReq = state => {

  return {
    ...state,
    loadingList: true
  };
};

const setOrderSearch = (state, payload) => {
  return {
    ...state,
    data: payload.data,
    loadingList: false
  };
};

const setAddOrderReq = state => {

  return {
    ...state,
    loadingAdd: true
  };
};

const setAddOrderSuccess = state => {

  return {
    ...state,
    loadingAdd: false
  };
};

const setToken = (state, payload) => {
  return {
    ...state,
    token: payload.data.session,
    email: payload.data.email
  };
};

const setCleanToken = state => {
  return {
    ...state,
    token: '',
    email: ''
  };
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDERS_REQUEST:
      return setOrderReq(state);
    case actionTypes.GET_ORDERS_SUCCESS:
      return setOrderSearch(state, action.payload);
    case actionTypes.ADD_ORDER_REQUEST:
      return setAddOrderReq(state, action.payload);
    case actionTypes.ADD_ORDER_SUCCESS:
      return setAddOrderSuccess(state, action.payload);
    case actionTypes.LOGIN_SUCCESS:
      return setToken(state, action.payload);
    case actionTypes.LOGOUT:
      return setCleanToken(state);
    default:
      return state;
  }
};

export default OrderReducer;
