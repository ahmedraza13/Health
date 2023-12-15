import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AdminPage from "../pages/AdminPage.jsx";
import UserRoute from "./UserRoute.jsx";
import AuthRoute from "./AuthRoute.jsx";
import AdminRoute from "./AdminRoute.jsx";
import ApplyDoctor from "../pages/ApplyDoctor.jsx";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<UserRoute />}>
          <Route index element={<Home />} />
          <Route path="applydoctor" element={<ApplyDoctor />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="admin" element={<AdminPage />} />
        </Route>

        <Route element={<AuthRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
