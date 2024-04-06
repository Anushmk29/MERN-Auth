import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Lottie from "lottie-react";
import signupAnimation from "../animations/animation-2.json";
import axios from "axios";

const Resetpass_Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  // const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(otp, password);

    e.preventDefault();

    if (!otp || !password) {
      alert("Please enter both OTP and new password.");
      return;
    }
    axios
      .post("http://localhost:3000/Resetpass_OTP", {
        OTP: otp,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          navigate("/home");
          alert("password updated");
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center bg-blue-500 p-4 overflow-hidden ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl shadow-lg ">
          <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-8 mb-8 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                Forgot your password!
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                className="space-y-6"
                action="#"
                method="POST"
                onSubmit={() => {
                  navigate("/Reset_Success");
                }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      New Password
                    </label>
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
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      OTP
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="OTP"
                      name="OTP"
                      type="text"
                      required
                      value={otp}
                      onChange={(e) => {
                        setOtp(e.target.value);
                      }}
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="hidden md:block  m-6  ">
            <Lottie
              className="  max-w-xl max-h-full rounded-xl"
              animationData={signupAnimation}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resetpass_Otp;
