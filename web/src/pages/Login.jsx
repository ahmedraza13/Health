import * as React from "react";
import * as MUI from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/index.mjs";
import axios from "axios";
import { toast } from "react-toastify";

const defaultTheme = MUI.createTheme();

export default function LogIn() {
 
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  

  const handleSubmit = async (event) => {
    localStorage.clear();
    event.preventDefault();
    const objToSend = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${BASE_URL}/login`, objToSend);
      console.log(response.data.token);
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
        const adminToken = response.data.tokenAdmin;
        console.log(adminToken);
        if (adminToken) {
          localStorage.setItem("email", email);
          localStorage.setItem("tokenAdmin", adminToken);
          localStorage.setItem("accountType", "admin");
          localStorage.setItem("name", response.data.data.fullName);
          navigate("/admin");
        }
        else {
          localStorage.setItem("userToken", response.data.token)
          localStorage.setItem("accountType", "user");
          localStorage.setItem("name", response.data.data.fullName);
          navigate("/");
        }
      
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
            Sign in
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
              <MUI.Grid item xs={12}>
                <MUI.FormControlLabel
                  control={
                    <MUI.Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </MUI.Grid>
            </MUI.Grid>
            <MUI.Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </MUI.Button>
            <MUI.Grid container justifyContent="flex-end">
              <MUI.Grid item>
                <Link
                  to="/signup"
                  variant="body2"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </MUI.Grid>
            </MUI.Grid>
          </MUI.Box>
        </MUI.Box>
      </MUI.Container>
    </MUI.ThemeProvider>
  );
}
