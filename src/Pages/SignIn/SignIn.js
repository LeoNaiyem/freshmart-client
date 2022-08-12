import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const SignIn = () => {
  const { handleGoogleLogin, handleSignInUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  // handling existing user's signIn
  const onSubmit = (data) => {
    const { email, password } = data;
    handleSignInUser(email, password, navigate, from);
  };
  return (
    <Container>
      <Link to="/">
        <Typography
          sx={{
            py: "2rem",
            color: "#030a53",
            fontSize: "25px",
            fontWeight: 900,
          }}
        >
          FRESHMART CO-OP
        </Typography>
      </Link>
      <Box
        sx={{
          minHeight: "75vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={3} sx={{ width: "30%", p: 4 }}>
          <Typography
            sx={{ fontWeight: 600, mb: 1 }}
            variant="h6"
            color="#133730"
          >
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("email", {
                required: {
                  value: true,
                  maxLength: 20,
                  message: "Email is required",
                },
              })}
              sx={{ width: "100%", mb: 3 }}
              id="standard-basic"
              label="Your Email"
              type="email"
              variant="standard"
            />
            <TextField
              {...register("password", {
                required: {
                  value: true,
                  maxLength: 20,
                  message: "Password is required",
                },
              })}
              sx={{ width: "100%", mb: 3 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              variant="standard"
            />
            <Button
              sx={{ background: "#133730", width: "100%", mb: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </form>
          <Typography sx={{ fontSize: "15px", mt: 5 }} variant="p">
            Don't have an account?&nbsp;
            <Link to="/signUp">
              <Typography
                sx={{
                  color: "#71BA58",
                  fontSize: "15px",
                  textDecoration: "underline",
                }}
                variant="p"
                color="primary"
              >
                Create an account
              </Typography>
            </Link>
          </Typography>
        </Paper>
        <Box sx={{ mt: 2 }}>--------------------Or--------------------</Box>
        <Box sx={{ width: "30%" }}>
          <Button
            sx={{ width: "100%", my: 2, borderRadius: "15px" }}
            variant="outlined"
            startIcon={<FacebookIcon />}
          >
            Continue with Facebook
          </Button>
          <Button
            onClick={() => handleGoogleLogin(navigate, from)}
            sx={{ width: "100%", borderRadius: "15px" }}
            variant="outlined"
            startIcon={<GoogleIcon />}
          >
            Continue with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
