const initState = {
  processing: false,
  token: null,
  error: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        processing: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        processing: false,
        token: action.token
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        processing: false,
        error: action.error
      };
    case "LOGOUT":
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
}

export default authReducer;
