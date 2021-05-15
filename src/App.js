// import React from "react";
// import RegForm from "./services/dashboard/components/RegForm";
// const App = () => {
//   return (
//     <div>
//       <RegForm />
//     </div>
//   );
// };
// import React from "react";
// import LoginPage from "./services/demoauth/components/LoginPage";
// import store from "./services/demoauth/store/store";
// import { Provider } from "react-redux";
// const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <LoginPage />
//       </div>
//     </Provider>
//   );
// };

// export default App;

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

// import React from "react";
// import ForgotPassword from "./services/authentication/components/ForgotPassword";
// function App() {
//   return (
//     <div>
//       <ForgotPassword />
//     </div>
//   );
// }

// export default App;
