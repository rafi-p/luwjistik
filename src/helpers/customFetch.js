/* eslint-disable no-undef */

import { axios } from '../constant/index';

const customFetch = async(url, method, data) => {
  try {
    const config = {
      method: 'get',
      url,
      headers: { 'Content-Type': 'application/json' }
    };
    if (method === 'POST') {
      config['method'] = 'post';
      config['data'] = JSON.stringify(data);
    }
    const response = await axios({
      method: 'post',
      data: JSON.stringify(data),
      url,
      headers: { 'Content-Type': 'application/json' }
    });

    switch (response.status) {
      case 500:
        break;

      case 404:
        return await response;

      case 403:
        break;
      case 401:
        return await response;

      case 400:
        return await response;

      default:
        return await response;
    }
  } catch (err) {
    throw err;
  }
};
export default customFetch;
