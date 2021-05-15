import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../actions/actionCreators";
// import firebase from '../../config/fbConfig'

export const onLogin =
  (creds) =>
  (dispatch, getState, { getFirebase }) => {
    dispatch(loginRequest());
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch(loginSuccess());
        console.log("successs");
      })
      .catch(() => {
        dispatch(loginFailure());
        console.log("error");
      });
  };
