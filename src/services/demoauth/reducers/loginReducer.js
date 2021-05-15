import { initialState } from "./loginState";
import ACTION from "../actions/actionTypes";
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.LOGIN_REQUEST: {
      return {
        isLoggedIn: false,
      };
    }
    case ACTION.LOGIN_SUCCESS: {
      return {
        isLoggedIn: true,
      };
    }
    case ACTION.LOGIN_FAILURE: {
      return {
        isLoggedIn: false,
      };
    }
    //   case default: {
    //       return {
    //           ..state,
    //       }
    //        }
  }
};
export default loginReducer;
