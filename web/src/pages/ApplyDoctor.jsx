import React from "react";
import * as MUI from "@mui/material";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const ApplyDoctor = () => {
  return (
    <>
      <Header />
      <MUI.Box sx={{ display: "flex" }}>
        <SideBar />
        <MUI.Box sx={{ display: "flex", flexDirection: "column" }}>
          <MUI.Typography variant="h5" component="h1" sx={{ ml: 3, mt: 3 }}>
            Apply for doctor
          </MUI.Typography>

          <MUI.Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 3, ml: 6, mr: 3 }} 
          >
            <MUI.Grid container spacing={2}>
              <MUI.Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              

                <MUI.TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </MUI.Grid>
              <MUI.Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <MUI.TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </MUI.Grid>
              <MUI.Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <MUI.TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </MUI.Grid>
              <MUI.Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <MUI.TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </MUI.Grid>
              <MUI.Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <MUI.TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </MUI.Grid>
              <MUI.Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <MUI.TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </MUI.Grid>
              <MUI.Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <MUI.TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </MUI.Grid>
              <MUI.Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <MUI.TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </MUI.Grid>
              <MUI.Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <MUI.TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </MUI.Grid>
            </MUI.Grid>
            <MUI.Button
              type="submit"
              width="50%"
              variant="contained"
              sx={{ mt: 3, mb: 2, width: "50%" }}
            >
              Sign In
            </MUI.Button>
          </MUI.Box>
        </MUI.Box>
      </MUI.Box>
    </>
  );
};

export default ApplyDoctor;
