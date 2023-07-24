import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // const process = confirm("Please Login Before");
  console.log(location);
  if (loading) {
    return (
      <>
        <p className=" text-red-600 text-center text-2xl mt-80">
          Loading......
        </p>
      </>
    );
  }

  if (user) {
    return children;
  }
  if (!user) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "You Have to Login First",
      showConfirmButton: true,
    });

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRoute;
