import actionTypes from './actionTypes';
import { LocalStorage } from '../../helpers';

const initialState = {
  data: [],
  loadingList: false,
  token: ''
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

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDERS_REQUEST:
      return setOrderReq(state);
    case actionTypes.GET_ORDERS_SUCCESS:
      return setOrderSearch(state, action.payload);
    default:
      return state;
  }
};

export default OrderReducer;
