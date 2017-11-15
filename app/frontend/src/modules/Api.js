import axios from 'axios';
import toSnakeCase from 'toSnakeCase';
import toCamelCase from 'toCamelCase';
import convertObjectKeys from 'convertObjectKeys';

export default class Api {
  static signUpUser(user) {
    return axios.post('api/auth', convertObjectKeys(user, toSnakeCase));
  }

  static loginUser(user) {
    return axios.post('api/auth/sign_in', convertObjectKeys(user, toSnakeCase));
  }

  static logoutUser(userTokens) {
    return axios.delete('api/auth/sign_out', {
      headers: userTokens
    });
  }

  static profileShow(id, userTokens) {
    return axios({
      method: 'get',
      url: `/api/profiles/${id}`,
      headers: userTokens
    }).then(({ data }) => convertObjectKeys(data, toCamelCase));
  }

  static profileUpdate(id, profile, userTokens) {
    return axios({
      method: 'put',
      url: `/api/profiles/${id}`,
      headers: userTokens,
      data: { profile: convertObjectKeys(profile, toSnakeCase) }
    });
  }

  static createCompany(profileId, company, userTokens) {
    return axios({
      method: 'post',
      url: `/api/profiles/${profileId}/create_company`,
      headers: userTokens,
      data: { company: convertObjectKeys(company, toSnakeCase) }
    });
  }

  static showCompany(companyId, userTokens) {
    return axios({
      method: 'get',
      url: `/api/user/companies/${companyId}`,
      headers: userTokens
    }).then(({ data }) => convertObjectKeys(data, toCamelCase));
  }
}
