import React from "react";
import { useState } from "react";
import Lottie from "lottie-react";
import signupAnimation from "../animations/lottieAni-3.json";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Login");
    console.log(username, email, password);
    axios
      .post("http://localhost:3000/Sign-Up", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="  min-h-screen flex items-center justify-center bg-blue-500 p-4 overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl shadow-lg ">
          <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-4 mb-4 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 ">
                Create a new account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      value={username}
                      id="username"
                      name="username"
                      type="text"
                      onChange={(e) => {
                        setusername(e.target.value);
                      }}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                       p-5
                      placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      value={email}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                      className="block w-full rounded-md border-0 py-1.5 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      value={password}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                      className="block w-full rounded-md border-0 py-1.5 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Already a member?
                <Link
                  to="/Login"
                  className="font-semibold leading-6 text-blue-600 hover:text-indigo-500 ml-2"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>

          <div className=" hidden md:block m-6  ">
            <Lottie
              className=" max-w-2xl max-h-full rounded-xl"
              animationData={signupAnimation}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
