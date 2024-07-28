import { Toaster } from "@/components/ui/toaster";
import router from "@/routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import "../globals.css";

export const App = () => {
  return (
    <main className="flex h-screen bg-slate-950 text-white min-h-screen ">
      <RouterProvider router={router} />
      <Toaster />
    </main>
  );
};
