import * as React from "react";
import * as MUI from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/index.mjs";
import axios from "axios";
import { toast } from "react-toastify";

const defaultTheme = MUI.createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const [accountType, setAccountType] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const objToSend = {
      fullName,
      email,
      password,
      accountType,
    };

    try {
      const response = await axios.post(`${BASE_URL}/signup`, objToSend);
      console.log(response);
      if (response.data.status) {
        console.log(response.data.status);
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      
        navigate("/login");
      } else {
        toast.error(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("error", error.message);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <MUI.ThemeProvider theme={defaultTheme}>
      <MUI.Container component="main" maxWidth="xs">
        <MUI.CssBaseline />
        <MUI.Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MUI.Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </MUI.Avatar>
          <MUI.Typography component="h1" variant="h5">
            Sign up
          </MUI.Typography>
          <MUI.Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <MUI.Grid container spacing={2}>
              <MUI.Grid item xs={12}>
                <MUI.TextField
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  autoComplete="fullName"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </MUI.Grid>
              <MUI.Grid item xs={12}>
                <MUI.TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </MUI.Grid>
              <MUI.Grid item xs={12}>
                <MUI.TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </MUI.Grid>
              <MUI.FormControl sx={{ mt: 2, ml: 2, width: 450 }}>
                <MUI.InputLabel id="demo-simple-select-label">
                  Role
                </MUI.InputLabel>
                <MUI.Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={accountType}
                  label="Role"
                  onChange={(e) => setAccountType(e.target.value)}
                >
                  <MUI.MenuItem value={"admin"}>Admin</MUI.MenuItem>
                  <MUI.MenuItem value={"user"}>User</MUI.MenuItem>
                </MUI.Select>
              </MUI.FormControl>
            </MUI.Grid>
            <MUI.Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </MUI.Button>
            <MUI.Grid container justifyContent="flex-end">
              <MUI.Grid item>
                <Link
                  to="/login"
                  variant="body2"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Already have an account? Sign in
                </Link>
              </MUI.Grid>
            </MUI.Grid>
          </MUI.Box>
        </MUI.Box>
      </MUI.Container>
    </MUI.ThemeProvider>
  );
}
