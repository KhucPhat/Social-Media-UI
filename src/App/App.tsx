import { Toaster } from "@/components/ui/toaster";
import { CssBaseline } from "@mui/material";
import "../globals.css";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/routes.tsx";

export const App = () => {
  return (
    <main className="flex h-screen bg-slate-950 text-white min-h-screen ">
      <CssBaseline />
      <RouterProvider router={router} />
      <Toaster />
    </main>
  );
};
