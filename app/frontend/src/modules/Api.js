import axios from 'axios';
import toSnakeCase from 'toSnakeCase';
import convertObjectKeys from 'convertObjectKeys';

export default class Api {
  static signUpUser(user) {
    return axios.post("api/auth", convertObjectKeys(user, toSnakeCase));
  }

  static loginUser(user) {
    return axios.post("api/auth/sign_in", convertObjectKeys(user, toSnakeCase));
  }

  static logoutUser(userTokens) {
    return axios.delete("api/auth/sign_out", {
      headers: userTokens
    });
  }

  static profileShow(id, userToken) {
    return axios({
      method: 'get',
      url: `api/profiles/${id}`,
      headers: userToken
    });
  }

  static profileUpdate(id, userToken, profile) {
    return axios({
      method: 'put',
      url: `api/profiles/${id}`,
      headers: userToken,
      data: { profile: convertObjectKeys(profile, toSnakeCase)}
    });
  }
}
