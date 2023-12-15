import { Navigate, Outlet } from "react-router-dom";

const UserRoute = () => {
  return localStorage.getItem("userToken") ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default UserRoute;
