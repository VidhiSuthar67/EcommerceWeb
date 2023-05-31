import React, { useState } from "react";
import SiteLogo from "../Images/SiteLogo.png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  return (
    <header className="fixed shadow-md w-full px-5 md:px-4 h-18 z-50">
      {/* Desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="">
            <img src={SiteLogo} alt="SiteLogo" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-5 md:gap-6 text-base md:text-lg">
            <Link style={{ color: "black", textDecoration: "none" }} to={""}>
              Home
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={"services"}
            >
              Services
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={"about"}
            >
              About
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={"portfolio"}
            >
              Portfolio
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={"contact"}
            >
              Contact
            </Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500  h-4 w-4 text-center rounded-full text-sm m-0 p-0">
              0
            </div>
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-4xl cursor-pointer">
              <HiOutlineUserCircle />
            </div>

            {showMenu && (
              <div className="bg-white flex flex-col absolute right-10 bg-white py-2 drop-shadow-md shadow px-3">
                <Link
                  to={"newproduct"}
                  style={{ color: "black", textDecoration: "none" }}
                  className="whitespace-nowrap cursor-pointer"
                >
                  New Product
                </Link>
                <Link
                  to={"login"}
                  style={{ color: "black", textDecoration: "none" }}
                  className="whitespace-nowrap cursor-pointer"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
    </header>
  );
}

export default Header;
