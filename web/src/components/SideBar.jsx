import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

export default function SideBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
   localStorage.clear();
    toast.success("Logout successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
    navigate("/login");
  }
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 200,
        bgcolor: "#605BFF",
        minHeight: "100vh",
      }}
    >
      <React.Fragment>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Home" sx={{ color: "white" }} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <CalendarMonthIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Appointment" sx={{ color: "white" }} />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/applydoctor") }>
          <ListItemIcon>
            <PeopleIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Apply doctor" sx={{ color: "white" }}  />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Person2Icon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Profile" sx={{ color: "white" }} />
        </ListItemButton>
        <ListItemButton onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: "white" }} />
        </ListItemButton>
      </React.Fragment>
    </Box>
  );
}
