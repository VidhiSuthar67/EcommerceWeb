import React, { useState } from "react";
import LoginAni from "../Images/LoginAni.webp";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { imageset } from "../Utility/imageset";
const Signup = () => {
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
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

  const handleUploadProfileImage = async (e) => {
    const data = await imageset(e.target.files[0]);
    console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  console.log(process.env.REACT_APP_SERVER_DOMIN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmpassword } = data;
    if (firstName && email && password && confirmpassword) {
      if (password === confirmpassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const dataRes = await fetchData.json();
        console.log(dataRes);
        alert("Successfull");
        // navigate("/login");
      } else {
        alert("password and confirm password is not equal");
      }
    } else {
      alert("Please enter require fields");
    }
  };

  return (
    <div className="p-4 md:p-2">
      <div className="w-full max-w-sm bg-white m-auto flex  p-4 flex-col ">
        {/* <h4 className="text-center text-2xl font-bold"> Sign Up</h4> */}
        <div className=" w-20 h-20 overflow-hidden shadow-md m-auto relative rounded-full drop-shadow-md   ">
          <img
            className="w-full h-full "
            src={data.image ? data.image : LoginAni}
            alt="Login-Ani"
          />
          <label htmlFor="profileImage" className="">
            <div className="absolute drop-shadow-md cursor-pointer rounded-full bottom-0 h-1/4 bg-opacity-50 bg-slate-400 w-full text-center">
              <p className="text-xs text-white">Upload</p>
            </div>
            <input
              type={"file"}
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleUploadProfileImage}
            ></input>
          </label>
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={handleOnChange}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          ></input>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={handleOnChange}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          ></input>
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
          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="mt-1 mb-2 flex rounded px-2 py-1 bg-slate-200 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "Password"}
              id="confirmpassword"
              name="confirmpassword"
              value={data.confirmpassword}
              onChange={handleOnChange}
              className="w-full bg-slate-200 border-none outline-none  "
            ></input>
            <span
              className="flex text-2xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full text-white text-xl font-medium text-center rounded-full mt-4 py-1 m-auto max-w-[150px] bg-blue-400 cursor-pointer hover:bg-blue-500">
            Sign Up
          </button>
        </form>
        <p
          className="text-left mt-1 text-sm
        "
        >
          Already have account ? <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
