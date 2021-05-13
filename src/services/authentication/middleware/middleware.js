import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../actions/actionCreators";

export const handleLogin = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch(loginRequest());
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((res) => {
        dispatch(loginSuccess());
        console.log("success", res);
      })
      .catch((error) => {
        dispatch(loginFailure());
        console.log(error);
      });
  };
};
