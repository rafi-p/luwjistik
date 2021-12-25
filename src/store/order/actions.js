/* eslint-disable no-undef */
import * as ordersServices from '../../services/order';
import { LocalStorage } from '../../helpers';

import actionTypes from './actionTypes';

export const getOrdersRequest = () => ({
  type: actionTypes.GET_ORDERS_REQUEST,
});

export const getOrdersSuccess = payload => ({
  type: actionTypes.GET_ORDERS_SUCCESS,
  payload: { ...payload },
});

export const addOrderRequest = () => ({
  type: actionTypes.ADD_ORDER_REQUEST,
});

export const addOrderSuccess = payload => ({
  type: actionTypes.ADD_ORDER_SUCCESS,
  payload: { ...payload },
});

export const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
});
export const loginSuccess = payload => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: { ...payload },
});

export const setLogout = () => ({
  type: actionTypes.LOGOUT,
});

export const getOrders = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    dispatch(getOrdersRequest());
    const apiFetch = await ordersServices.getOrders(params, body);

    const { status, data, statusText, stat_msg } = apiFetch;

    if (status === 200) {
      resolve(dispatch(getOrdersSuccess({ data: data })));
    } else {
      reject(stat_msg);
    }
  });
};

export const addOrder = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    dispatch(addOrderRequest());
    const apiFetch = await ordersServices.addOrder(params, body);

    const { data, message, status } = apiFetch;

    if (status === 200) {
      resolve(dispatch(addOrderSuccess({ data: data })));
    } else {
      reject(message);
    }
  });
};

export const login = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    dispatch(loginRequest());
    const apiFetch = await ordersServices.login(params, body);

    const { data, message, status } = apiFetch;

    if (status === 200) {
      await LocalStorage.setToken(data.session);
      resolve(dispatch(loginSuccess({ data: data })));
    } else {
      reject(message);
    }
  });
};

export const logout = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    await LocalStorage.clearToken();
    resolve(dispatch(setLogout()));
  });
};