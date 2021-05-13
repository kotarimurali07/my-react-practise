import rootReducer from "../reducers/index";
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { composeWithDevTools } from "redux-devtools-extension";
import fbConfig from "../../../config/fbConfig";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase })),
      reduxReactFirebase(fbConfig, {
        attachAuthIsReady: true,
      })
    )
  )
);

export default store;
