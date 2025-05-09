import { Navigate } from "react-router-dom";

const AuthProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/" />;
  return children;
};
export default AuthProtectedRoute;
