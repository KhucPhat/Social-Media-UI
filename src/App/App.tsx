import { Toaster } from "@/components/ui/toaster";
import RoutesApp from "@/routes/routes.tsx";
import { CssBaseline } from "@mui/material";
import "../globals.css";

export const App = () => {
  return (
    <main className="flex h-screen bg-slate-950 text-white min-h-screen ">
      <CssBaseline />
      <RoutesApp />
      <Toaster />
    </main>
  );
};
