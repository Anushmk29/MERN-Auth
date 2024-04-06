import React from "react";
import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import signupAnimation from "../animations/animation-2.json";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(email, password);
    e.preventDefault();
    axios
      .post("http://localhost:3000/Login", {
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log(res.data.message);
        // console.log(res.data);
        if (res.data.code === 200) {
          alert("login success");
          navigate("/Home");
          if (res.data.token) {
            localStorage.setItem("TOKEN", res.data.token); // Store the token in local storage
            localStorage.setItem("EMAIL", res.data.email); // Store the email in local storage
          }
        }
        if (res.data.code === 404) {
          alert("wrong password");
        }
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="   min-h-screen min-w-screen flex justify-center items-center p-3 bg-blue-500 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl shadow-lg overflow-hidden ">
          <div className="  flex flex-col justify-center px-6 py-6 lg:px">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-8 mb-8 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                Login to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                action="#"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
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
                    <div className="text-sm">
                      <Link
                        to="Forgot_pass"
                        className="font-semibold text-blue-700 hover:text-blue-500"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
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
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Login
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <Link
                  to="/SignUp"
                  id="msg"
                  className="font-semibold leading-6 text-blue-600 hover:text-indigo-500 ml-2"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </div>

          <div className="  hidden md:block m-6  ">
            <Lottie
              className=" max-w-xl max-h-full  rounded-xl"
              animationData={signupAnimation}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
