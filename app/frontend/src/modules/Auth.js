class Auth {
  static signInUser(token) {
    localStorage.setItem('token', token);
  }

  static isUserLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  static logoutUser() {
    localStorage.removeItem('token');
  }

  static getToken() {
    return localStorage.getItem('token');
  }
}

export default Auth;
