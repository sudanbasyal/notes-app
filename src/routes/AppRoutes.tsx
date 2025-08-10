import { Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoutes";
import Login from "../pages/auth/Login";
import ProtectedRoute from "./ProtectedRoutes";
import Signup from "../pages/auth/Signup";
import NotesDashboard from "../pages/note";


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/notes" element={<NotesDashboard/>} />
      </Route>
    </Routes>
  );
}
