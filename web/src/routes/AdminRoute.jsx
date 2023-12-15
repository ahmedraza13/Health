import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  return localStorage.getItem("tokenAdmin") ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default AdminRoute;
