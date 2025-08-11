import { Navigate, Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoutes";
import Login from "../pages/auth/Login";
import ProtectedRoute from "./ProtectedRoutes";
import Signup from "../pages/auth/Signup";
import NotesDashboard from "../pages/note";
import NotFoundPage from "../components/ui/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/notes" replace />} />
      <Route element={<PublicRoute />}>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/notes" element={<NotesDashboard />} />
      </Route>
      {/* Optionally, add a NotFound page here */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
