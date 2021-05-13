import React, { useState } from "react";
import { CustomField } from "../../../../shared/components/formFeilds";

const Presentation = () => {
  const [email, setEmail] = useState("");
  const [phone, setPassword] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <h1>heloo</h1>
      <CustomField
        label="Email Address"
        value={email}
        required
        name="email"
        type="email"
        variant="standard"
        fullWidth
        //onChange={(event) => setEmail(event.target.value)}
        handleChange={handleChange}
      />
      <CustomField
        label="Email Address"
        value={phone}
        required
        name="email"
        type="email"
        variant="standard"
        fullWidth
        //onChange={(event) => setEmail(event.target.value)}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Presentation;
