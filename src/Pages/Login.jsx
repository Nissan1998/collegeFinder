import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

import { AuthContext } from "../Providers/AuthProvider";
import app from "../Firebase/Firebase.config";

const Login = () => {
  const [error, setError] = useState("");
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //GitHub SignIn Process--------->
  const handleGithub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div
      className="pt-24"
      style={{
        backgroundImage: "url(https://wallpaper.dog/large/17008270.jpg)",
        height: 600,
      }}
    >
      <div className="w-50 mx-auto glass w-[50%] bg-sky-500 bg-opacity-20 p-5">
        <h4 className="text-center text-3xl font-bold text-white">
          Please Login
        </h4>
        <h3 className="text-danger">
          {error ? "Wrong:-" : ""}
          {error}
        </h3>
        <form
          className="mb-2 w-[50%] text-center mx-auto mt-10"
          onSubmit={handleLogin}
        >
          <div className="mb-3" controlId="formBasicEmail">
            <label className="text-white text-lg mr-5">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-3" controlId="formBasicPassword">
            <label className="text-lg mr-14 text-white">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <p className=" link text-blue-400 mt-5">
              <Link>Forget PassWord?</Link>
            </p>
          </div>

          <button
            className="bg-sky-500 mb-5 py-1 hover:btn-outline hover:bg-transparent hover:text-sky-500 font-semibold glass text-white px-5 rounded-xl"
            type="submit"
          >
            Login
          </button>
          <br />
          <p className="text-white">
            Do not Have an Account?{" "}
            <Link className="text-blue-400 link" to="/register">
              Register
            </Link>
          </p>
        </form>
        <p className="text-white me-2 text-center ">Continue With</p>
        <div className="flex justify-center">
          <button onClick={handleGoogleSignIn} className="me-3" variant="light">
            <img
              style={{ width: 30 }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
          </button>
          <button onClick={handleGithub} className="bg-white rounded-full">
            <img
              id="GitHub"
              style={{ width: 30 }}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
