import { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Forgot_pass from "./components/Forgot_pass";
import Home from "./components/home";
import Resetpass_Otp from "./components/Resetpass_Otp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <SignUp /> },
    { path: "/SignUp", element: <SignUp /> },
    { path: "/Login", element: <Login /> },
    { path: "/", element: <Login /> },
    { path: "/Login/Forgot_pass", element: <Forgot_pass /> },
    { path: "/home", element: <Home /> },
    { path: "/Resetpass_OTP", element: <Resetpass_Otp /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
