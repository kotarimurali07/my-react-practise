import loginReducer from "./loginReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: loginReducer,
  firebase: firebaseReducer,
});
export default rootReducer;
