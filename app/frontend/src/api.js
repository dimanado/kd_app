import axios from 'axios';
import toSnakeCase from 'toSnakeCase';
import convertObjectKeys from 'convertObjectKeys';

export function loginUser(user) {
  return axios.post("api/auth/sign_in", convertObjectKeys(user, toSnakeCase));
}

export function logoutUser(userTokens) {
  debugger;
  return axios.delete("api/auth/sign_out", {
    headers: userTokens
  });
}

export function signUpUser(user) {
  return axios.post("api/auth", convertObjectKeys(user, toSnakeCase));
}
