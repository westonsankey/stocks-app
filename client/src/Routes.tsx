import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginController from "./components/Login/LoginController";
import Layout from "./components/Layout/Layout";
import RegisterController from "./components/Register/RegisterController";
import { RequireAuth } from "./components/Auth/RequireAuth";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginController />} />
      <Route path="/register" element={<RegisterController />} />

      <Route element={<RequireAuth />}>
        <Route path="/" element={<Layout />} />
      </Route>
    </Routes>
  );
};
