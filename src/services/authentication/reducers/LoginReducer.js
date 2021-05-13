import ACTION from "../actions/actionTypes";
import initialState from "./loginState";

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.LOGIN_REQUEST: {
      return {
        ...state,
        isLoggedin: false,
      };
    }
    case ACTION.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedin: true,
      };
    }
    case ACTION.LOGIN_FAILURE: {
      return {
        ...state,
        isLoggedin: false,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default LoginReducer;
