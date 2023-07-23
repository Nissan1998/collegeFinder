import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    return logOut();
  };
  return (
    <div>
      <div className="navbar fixed z-10 text-white font-bold glass bg-sky-500 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/colleges">Colleges</Link>
              </li>
              <li>
                <Link>Admission</Link>
              </li>
              <li>
                <Link>My College</Link>
              </li>
              <li>
                {user && (
                  <Link to="/profile" className="mr-5">
                    <FaUserCircle className="inline-block text-xl" />{" "}
                    {user?.displayName}
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <Link className=" normal-case border-4 rounded-full border-yellow-400 text-xl">
            <span className="bg-sky-500   px-2 rounded-full py-1 glass">
              CollegeFinder
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/colleges">Colleges</Link>
            </li>
            <li>
              <Link to="/admission">Admission</Link>
            </li>
            <li>
              <Link>My College</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <Link to="/profile" className="mr-5 hidden md:flex">
              <FaUserCircle className="inline-block text-xl mr-2" />{" "}
              {user?.displayName}
            </Link>
          )}
          {user ? (
            <Link
              onClick={handleLogout}
              className="border-2  rounded-xl py-1 glass transition delay-150 hover:text-yellow-500  text-red-500 hover:bg-white  px-5 "
            >
              <span>Logout</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="border-2  rounded-xl py-1 glass transition delay-150 hover:text-yellow-500  border-white hover:bg-white  px-5 "
            >
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
