import "./App.css";

import { Toaster } from "sonner";
import ModalManager from "./components/ModalManager";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <main className="min-h-screen ">
      <AppRoutes />
      <Toaster richColors />
      <ModalManager />
    </main>
  );
}

export default App;
