class Auth {
  static login(token) {
    localStorage.setItem("token", token);
  }

  static isLoggedIn() {
    return localStorage.getItem("tokne") !== null;
  }

  static logout() {
    localStorage.removeItem("token");
  }

  static getToken() {
    return localStorage.getItem("token");
  }
}

export default Auth;
