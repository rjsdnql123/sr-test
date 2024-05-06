import { Navigate, Outlet } from "react-router-dom";

const isLogin = !!localStorage.getItem("token");

const PrivateRoute = () => {
  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;