import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import "../globals.css";
import RoutesApp from "@/routes/routes.tsx";

export const App = () => {
  return (
    <main className="flex h-screen">
      <SnackbarProvider>
        <CssBaseline />
        <RoutesApp />
      </SnackbarProvider>
    </main>
  );
};
