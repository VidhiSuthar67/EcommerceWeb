import React, { useState } from "react";
import LoginAni from "../Images/LoginAni.webp";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      alert("Successfully login");
    } else {
      alert("Please enter require fields");
    }
  };

  return (
    <div className="p-4 md:p-2">
      <div className="w-full max-w-sm bg-white m-auto flex items-center p-4 flex-col">
        {/* <h4 className="text-center text-2xl font-bold"> Sign Up</h4> */}
        <div className=" w-20  ">
          <img
            className="rounded-full shadow-md drop-shadow-md  w-full"
            src={LoginAni}
            alt="Login-Ani"
          />
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          ></input>

          <label htmlFor="password">Password</label>
          <div className="mt-1 mb-2 flex rounded px-2 py-1 bg-slate-200 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "Password"}
              id="password"
              name="password"
              value={data.password}
              onChange={handleOnChange}
              className="w-full bg-slate-200 border-none outline-none  "
            ></input>
            <span
              className="flex text-2xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full text-white text-xl font-medium text-center rounded-full mt-4 py-1 m-auto max-w-[150px] bg-blue-400 cursor-pointer hover:bg-blue-500">
            Login
          </button>
        </form>
        <p
          className="text-left mt-1 text-sm
        "
        >
          Don't have account ? <Link to={"/signup"}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
