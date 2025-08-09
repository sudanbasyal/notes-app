import { Navigate, Outlet } from "react-router-dom";
import { useTypedSelector } from "../store";

export default function PublicRoute() {
  const accessToken = useTypedSelector((state)=>state.auth.usedToken)
  const isAuthenticated = !!accessToken;
  return !isAuthenticated ? <Outlet /> : <Navigate to="/notes" replace />;
}
