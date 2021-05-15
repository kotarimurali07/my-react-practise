import { Button, Card } from "@material-ui/core";
import React from "react";
import { CustomField } from "../../../../shared/components/formFeilds";
const Presentation = () => {
  return (
    <div>
      <Card>
        <div className="email">
          <CustomField
            type="email"
            name="email"
            // handleChange={handleEmail}
            label="email"
            required
            // value={email}
            fullWidth
          />
        </div>
        <div>
          <CustomField
            type="password"
            name="password"
            label="Password"
            required
            // value={password}
            //handleChange={handlePassword}
            variant="outlined"
            fullWidth
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          className="button"
          fullWidth
          //onClick={handleSubmit}
        >
          login
        </Button>
      </Card>
    </div>
  );
};

export default Presentation;
