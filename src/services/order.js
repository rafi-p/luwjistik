import { Endpoints } from '../constant/index';
import { convert, customFetch } from '../helpers/index';

export const getOrders = async(params, data) => {

  const setOrder = cats => {
    return cats;
  };

  try {
    const response = await customFetch(`${Endpoints.param.order}`, 'GET', data, false);

    if (response.data) {
      response.data = setOrder(response.data?.data);
    } else {
      response.data = [];
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const addOrder = async(params, data) => {

  try {

    const response = await customFetch(`${Endpoints.param.order}`, 'POST', data, false);

    if (response.data) {
      response.data = response.data?.data;
    } else {
      response.data = {};
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async(params, data) => {

  try {

    const response = await customFetch(`${Endpoints.param.login}`, 'POST', data, false);

    if (response.data) {
      response.data = response.data?.data;
    } else {
      response.data = {};
    }
    return response;
  } catch (error) {
    throw error;
  }
};