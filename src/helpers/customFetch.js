/* eslint-disable no-undef */

import { axios } from '../constant/index';
import { LocalStorage } from '../helpers/index';

const customFetch = async(url, method, data) => {
  try {
    const config = {
      method: 'get',
      url,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': LocalStorage.getToken() ?? ''
      }
    };
    if (method === 'POST') {
      config['method'] = 'post';
      config['data'] = JSON.stringify(data);
    }
    const response = await axios(config);

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
