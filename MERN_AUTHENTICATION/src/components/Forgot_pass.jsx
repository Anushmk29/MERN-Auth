import React from "react";
import Lottie from "lottie-react";
import signupAnimation from "../animations/animation-2.json";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Forgot_pass = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
    axios
      .post("http://localhost:3000/Forgot_pass", {
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        // console.log(res.body.email);
        if (res.status === 200) {
          alert("Otp sent successfully");
          navigate("/Resetpass_OTP");
        } else {
          // Handle error response here
          console.log("Error sending OTP");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        if (res.status === 404) {
          alert("user not found");
        }
      });
  };
  return (
    <>
      <div className=" min-h-screen flex items-center justify-center bg-blue-500 p-4 overflow-hidden ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl shadow-lg ">
          <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-8 mb-3 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                Forgot your password ?
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                className="space-y-6"
                action="#"
                method="POST"
                onSubmit={handleSubmit}
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
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Send OTP
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

export default Forgot_pass;
