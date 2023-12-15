
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  return !localStorage.getItem("userToken") ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} />
  );
};

export default AuthRoute;