import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {

  let token = localStorage.getItem("token");
  return token ? <Navigate to="/admin" /> : <>{children}</>;
};

export default PublicRoutes;