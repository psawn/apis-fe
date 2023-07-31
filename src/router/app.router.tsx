import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/login/login";
import Register from "../components/register/register";
import ProtectedRoute from "./protected.router";
import Profile from "../components/profile/profile";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
