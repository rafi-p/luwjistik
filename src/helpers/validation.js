/* eslint-disable no-undef */
export function validateEmail(mail) {
  let flag = false;
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (regex.test(mail)) {
    flag = true;
  } else {
    flag = false;
  }
  return flag;
}

