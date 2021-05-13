import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import {
  Card,
  CardMedia,
  Button,
  Snackbar,
  Paper,
  Link,
} from "@material-ui/core";
import useStyles from "../../styles/Login";
import Tiger from "../../../../shared/logos/Tiger.jpg";
import "../../styles/Login.css";
import { CustomField } from "../../../../shared/components/formFeilds";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function FullWidthGrid(props) {
  const classes = useStyles();
  const { email, password, handleEmail, handlePassword, open, setOpen } = props;

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
            <img src={Tiger} style={{ width: "700px", height: "300px" }} />
          </CardMedia>
          <Paper className={classes.paper}>
            <h1>SIGN UP</h1>

            <div className="email">
              <CustomField
                type="email"
                name="email"
                handleChange={handleEmail}
                label="email"
                required
                value={email}
                fullWidth
              />
            </div>
            <div className="password">
              <CustomField
                type="password"
                name="password"
                label="Password"
                required
                value={password}
                handleChange={handlePassword}
                variant="outlined"
                fullWidth
              />
            </div>

            <div className="password">
              <CustomField
                type="password"
                name="password"
                label="confirm password"
                required
                value={password}
                handleChange={handlePassword}
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="button">
              <Button
                variant="contained"
                color="primary"
                className="button"
                fullWidth
              >
                signUp
              </Button>
            </div>
            <div className="signUp">
              already have an account?
              <Link href="#">Login</Link>
            </div>
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
