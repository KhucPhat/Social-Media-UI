import { Button, FormControl, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  inputs: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    height: "50px",
    "& .MuiInputBase-root": {
      height: "100%",
    },
  },
  label: {
    padding: "10px 0px",
    color: "#fff",
    fontSize: "14px !important",
  },
  button: {
    height: "40px",
    margin: "15px 0px !important",
    backgroundColor: "#4338ca !important",
  },
}));

export const SigninForm = () => {
  const classes = useStyles();
  return (
    <>
      <form>
        <div
          className="w-420 flex justify-center flex-col"
          style={{ width: "420px" }}
        >
          <img
            src="public/assets/images/logo.svg"
            alt="logo"
            style={{ width: "200px", margin: "0 auto" }}
          />
          <h2 className="h3-bold pt-10 text-center text-lg">
            Log in to your account
          </h2>
          <p className="text-light-3 small-medium md:base-regular mt-2 text-center">
            Welcome back! Please enter your details.
          </p>
          <FormControl required fullWidth margin="normal">
            <Typography className={classes.label}>Email</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className={classes.inputs}
            />
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <Typography className={classes.label}>Password</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className={classes.inputs}
            />
            {/* <Input
              name="password"
              autoComplete="password"
              disableUnderline={true}
              className={classes.inputs}
              // type={this.state.hidePassword ? "password" : "input"}
              // endAdornment={
              //   this.state.hidePassword ? (
              //     <InputAdornment position="end">
              //       <VisibilityOffTwoToneIcon
              //         fontSize="default"
              //         className={classes.passwordEye}
              //         onClick={this.showPassword}
              //       />
              //     </InputAdornment>
              //   ) : (
              //     <InputAdornment position="end">
              //       <VisibilityTwoToneIcon
              //         fontSize="default"
              //         className={classes.passwordEye}
              //         onClick={this.showPassword}
              //       />
              //     </InputAdornment>
              //   )
              // }
            /> */}
          </FormControl>
          <Button
            variant="contained"
            className={classes.button}
            sx={{ textTransform: "inherit" }}
          >
            Sign in
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Don&apos;t have an account?
            <Link
              to="/sign-up"
              className="text-primary-500 text-small-semibold ml-1"
              style={{ color: "#4338ca" }}
            >
              Sign up
            </Link>
          </Typography>
        </div>
      </form>
    </>
  );
};
