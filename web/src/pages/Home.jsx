import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Box } from "@mui/material";

function Home() {
  
  return (
    <Box sx={{ display: "flex"}}>
      <SideBar />
      <Header />
     
    </Box>
  );
}

export default Home;
