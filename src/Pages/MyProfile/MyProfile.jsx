import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const [myColleges, setCollege] = useState([]);
  const { user } = useContext(AuthContext);

  const details = myColleges[0];

  useEffect(() => {
    fetch(
      `https://college-finder-server-three.vercel.app/myadmission/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setCollege(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!user) {
    return <>Loading.........</>;
  }
  return (
    <div className="pt-16">
      <div>
        <h2 className="text-center mb-10 mt-10 text-3xl font-bold">
          Your Profile
        </h2>
      </div>
      <div className="container relative mx-auto mb-10">
        <div className="card card-side bg-sky-100 shadow-xl">
          <figure>
            <img src={details?.photo} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title bg-sky-600 w-80 rounded-xl text-white px-5">
              {details?.name}
            </h2>
            <div className="font-semibold">
              <address>Address:- {details?.address}</address>
              <p>Email:- {user?.email}</p>
              <p>College:- {details?.admitted}</p>
            </div>
            <div className="card-actions justify-end absolute top-1 right-1 ">
              <button className="bg-sky-500 text-white px-5 py-1 rounded-full">
                Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
