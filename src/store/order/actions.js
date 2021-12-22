/* eslint-disable no-undef */
import * as ordersServices from '../../services/order';

import actionTypes from './actionTypes';

export const getOrdersRequest = () => ({
  type: actionTypes.GET_ORDERS_REQUEST,
});

export const getOrdersSuccess = payload => ({
  type: actionTypes.GET_ORDERS_SUCCESS,
  payload: { ...payload },
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