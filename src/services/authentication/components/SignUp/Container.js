import React, { useState } from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";

const Container = (props) => {
  const { _handleLogin } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = { email, password };
    setOpen(true);
    // _handleLogin(data);
  };

  return (
    <div>
      <Presentation
        email={email}
        password={password}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Container;
