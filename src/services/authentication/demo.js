import React from "react";
import store from "./services/authentication/store/store";
import { Provider } from "react-redux";
import Login from "./services/authentication/components/Login";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Login />
      </Provider>
    </div>
  );
};

export default App;
