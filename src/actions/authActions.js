import { push } from "connected-react-router";

export function login(email, password) {
  return dispatch => {
    dispatch({ type: "LOGIN_START" });
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          dispatch({ type: "LOGIN_SUCCESS", token: data.token });
          dispatch(push("/todos"));
        } else {
          alert(data.message);
          dispatch({ type: "LOGIN_ERROR", error: data.message });
        }
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", error: err });
    })
  }
}

export function logout() {
  return { type: "LOGOUT" };
}
