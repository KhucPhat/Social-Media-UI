import Test from "@/Test/Test";
import MainLayout from "@/layouts/main/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default router;
