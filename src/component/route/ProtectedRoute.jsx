import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // You can show a loading spinner or message while the auth check is in progress
  }

  return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
