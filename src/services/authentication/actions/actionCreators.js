import ACTION from "./actionTypes";

export const loginRequest = () => {
  return {
    type: ACTION.LOGIN_REQUEST,
  };
};
export const loginSuccess = () => {
  return {
    type: ACTION.LOGIN_SUCCESS,
  };
};
export const loginFailure = () => {
  return {
    type: ACTION.LOGIN_FAILURE,
  };
};
