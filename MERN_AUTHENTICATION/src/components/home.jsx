import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const home = () => {
  const email_dis = localStorage.getItem("EMAIL");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (!token) {
      navigate("/Login");
    }
  }, []);
  return (
    <div>
      <div className="flex p-3 h-1/6 bg-blue-500  justify-between ">
        <h1 className="p-4">Home</h1>
        <span className="p-4">{email_dis}</span>
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/Login");
          }}
          className="bg-red-50 rounded-xl h-full w-1/6 p-1"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default home;
