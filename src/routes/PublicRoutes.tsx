import { Outlet, Navigate } from "react-router-dom";

export default function PublicRoute() {
  const isAuthenticated = false;
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
