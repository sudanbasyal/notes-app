import "./App.css";

import { Toaster } from "sonner";
import ModalManager from "./components/ModalManager";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <main className="min-h-screen p-2">
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
      <Toaster richColors />
      <ModalManager />
    </main>
  );
}

export default App;
