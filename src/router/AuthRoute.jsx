import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  let token = localStorage.getItem("token");
  return token ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoutes;
