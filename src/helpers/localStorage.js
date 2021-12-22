/* eslint-disable no-undef */


export function getToken() {
  return localStorage.getItem('tokenLuwijstik');
}

export function setToken(token) {
  return localStorage.setItem('tokenLuwijstik', token);
}

export function clearToken() {
  localStorage.removeItem('tokenLuwijstik');
}