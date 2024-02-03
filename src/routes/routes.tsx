import { AuthLayout } from "@/_auth/AuthLayout";
import SigninForm from "@/_auth/form/SigninForm";
import SignupForm from "@/_auth/form/SignupForm";
import { RootLayout } from "@/_root/RootLayout";
import Home from "@/_root/page.tsx/Home/Home";
import { Route, Routes } from "react-router-dom";

const RoutesApp = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route element={<AuthLayout />}>
        <Route element={<SigninForm />} path="/sign-in"></Route>
        <Route element={<SignupForm />} path="/sign-up"></Route>
      </Route>
      {/* private routes */}
      <Route element={<RootLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default RoutesApp;
