import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../HomePage/HomeContainer/Home";
import Colleges from "../Pages/CollegePage/Colleges";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AdmissionForm from "../Pages/AdmissionPages/AdmissionForm";
import CollegesList from "../Pages/AdmissionPages/CollegesList";

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
        path: "collegeslist",
        element: <CollegesList />,
      },
      {
        path: "admission",
        element: <AdmissionForm />,
      },
    ],
  },
]);
export default router;
