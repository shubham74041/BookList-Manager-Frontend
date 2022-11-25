import { Navigate } from "react-router-dom";

export const useAuth = () => {
  const user = localStorage.getItem("token");
  if (user) {
    return true;
  } else {
    return false;
  }
};
const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
