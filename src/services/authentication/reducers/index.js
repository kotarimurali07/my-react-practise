import LoginReducer from "./LoginReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: LoginReducer,
  firebase: firebaseReducer,
});
export default rootReducer;
