import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../state/authContext";

export function PrivateRoute({ children }: any) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
}
