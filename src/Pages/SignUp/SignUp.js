import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const { handelCreateUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';

  //handling create user
  const onSubmit = (data) => {
    const { email, password, confirmPassword, name } = data;
    if (password !== confirmPassword) {
      return alert("Passwords Are Not Matching!");
    }
    handelCreateUser(name, email, password, navigate, from);
    reset();
  };

  return (
    <Container sx={{ mb: 5 }}>
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
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={3} sx={{ width: "35%", p: 3 }}>
          <Typography
            sx={{ fontWeight: 600, mb: 1 }}
            variant="h6"
            color="#133730"
          >
            Create An Account
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("name", {
                required: {
                  value: true,
                  maxLength: 20,
                  message: "Name is required",
                },
              })}
              sx={{ width: "100%", mb: 3 }}
              id="standard-basic"
              label="Your Name"
              type="text"
              variant="standard"
            />
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
            <TextField
              {...register("confirmPassword", {
                required: {
                  value: true,
                  maxLength: 20,
                  message: "Password is not matching",
                },
              })}
              sx={{ width: "100%", mb: 3 }}
              id="standard-basic"
              label="Retype Your Password"
              type="password"
              variant="standard"
            />
            <Button
              sx={{ background: "#133730", width: "100%", mb: 1 }}
              type="submit"
              variant="contained"
            >
              Create An Account
            </Button>
          </form>
          <Typography sx={{ fontSize: "15px", mt: 5 }} variant="p">
            Already have an account?&nbsp;
            <Link to="/signIn">
              <Typography
                sx={{
                  color: "#71BA58",
                  fontSize: "15px",
                  textDecoration: "underline",
                }}
                variant="p"
                color="primary"
              >
                Login
              </Typography>
            </Link>
          </Typography>
        </Paper>
        <Box sx={{ mt: 2 }}>--------------------Or--------------------</Box>
        <Box sx={{ width: "35%" }}>
          <Button
            sx={{ width: "100%", my: 2, borderRadius: "15px" }}
            variant="outlined"
            startIcon={<FacebookIcon />}
          >
            Continue with Facebook
          </Button>
          <Button
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

export default SignUp;
