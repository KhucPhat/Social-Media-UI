import AuthLayout from "@/_auth/AuthLayout";
import SigninForm from "@/_auth/form/SigninForm";
import SignupForm from "@/_auth/form/SignupForm";
import { RootLayout } from "@/_root/RootLayout";
import Home from "@/_root/page.tsx/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "sign-in", element: <SigninForm /> },
      { path: "sign-up", element: <SignupForm /> },
    ],
  },
]);

export default router;
