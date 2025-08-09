
import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedRoute() {
   const isAuthenticated  = false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}
