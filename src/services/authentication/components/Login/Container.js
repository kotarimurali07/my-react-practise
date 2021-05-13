import React, { useState } from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import { handleLogin } from "../../middleware/middleware";
const Container = (props) => {
  const { _handleLogin } = props;
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const checkemail = emailPattern.test(e.target.value);
    if (checkemail === true && e.target.value.length > 1) {
      setEmail(e.target.value);
      setEmailError("");
      console.log("login suucessfull");
    } else {
      setEmail(e.target.value);
      setEmailError("invalid email error");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    setOpen(true);
    _handleLogin(data);
  };
  return (
    <div>
      <Presentation
        email={email}
        password={password}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
        emailError={emailError}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    _handleLogin: (credentials) => dispatch(handleLogin(credentials)),
  };
};
export default connect(null, mapDispatchToProps)(Container);
