import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@material-ui/icons";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import {
  Card,
  CardMedia,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import useStyles from "../../styles/Login";
import Tiger from "../../../../shared/logos/Tiger.jpg";
import "../../styles/Login.css";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function FullWidthGrid(props) {
  const classes = useStyles();
  const {
    email,
    password,
    handleEmail,
    handlePassword,
    handleSubmit,
    emailError,
    open,
    setOpen,
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Card className="heloo">
        <div>
          <CardMedia>
            <img src={Tiger} style={{ width: "700px", height: "350px" }} />
          </CardMedia>
          <Paper className={classes.paper}>
            <h1>LOGIN</h1>

            <TextField
              required
              id="outlined-full-width"
              label="email"
              style={{ margin: 8 }}
              value={email}
              onChange={handleEmail}
              fullWidth
              margin="normal"
              variant="outlined"
              className="email"
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
            {/* <span
              style={{
                color: "red",
              }}
            >
              {emailError}
            </span> */}
            <TextField
              required
              type={showPassword ? "text" : "password"}
              id="outlined-full-width"
              label="password"
              style={{ margin: 8 }}
              // helperText="Full width!"
              value={password}
              onChange={handlePassword}
              fullWidth
              margin="normal"
              className="password"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              className="button"
              fullWidth
              disabled={email.length && password.length == 0}
              onClick={handleSubmit}
            >
              login
            </Button>
          </Paper>
        </div>
      </Card>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}
