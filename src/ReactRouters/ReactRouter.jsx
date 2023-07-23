import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../HomePage/HomeContainer/Home";
import Colleges from "../Pages/CollegePage/Colleges";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Admission from "../Pages/AdmissionPagee/AdmissionForm";
import AdmissionForm from "../Pages/AdmissionPagee/AdmissionForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "colleges",
        element: <Colleges />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "admission",
        element: <AdmissionForm />,
      },
    ],
  },
]);
export default router;
