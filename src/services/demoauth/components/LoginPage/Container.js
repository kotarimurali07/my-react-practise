import React from "react";
import Presentation from "./Presentation";
import { onLogin } from "../../middleware/middleware";
import { connect } from "react-redux";
const Container = (props) => {
  console.log(props);
  return (
    <div>
      <Presentation />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    _onLogin: (creds) => {
      dispatch(onLogin(creds));
    },
  };
};
export default connect(null, mapDispatchToProps)(Container);
