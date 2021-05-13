import React, { useState } from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";

const Container = (props) => {
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const handlePassword = (e) => {
    setPassword(e.target.value);
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
        password={password}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Container;
