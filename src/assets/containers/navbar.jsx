import React from "react";
import logo from "../img/poll-logo.png";
import ButtonNav from "../components/buttons-nav/button-nav";
import Switch from "../components/switchDarkMode/switchDarkMode";
import { Link } from "react-router-dom";
import Hamburger from "../components/hamburger";


const Navbar = (props) => {



  
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pr-4">
        <Link to={"/"} className="block relative h-auto w-60 pt-2  rounded-lg  ">
          <img src={logo} alt="Website Logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
         <Hamburger />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium justify-center items-center flex-wrap flex md:p-0 mt-4 md:justify-center md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <Link to={"/"}>
                <ButtonNav text="Home" />
              </Link>
            </li>
            <li>
              <Link to={"category"}>
                <ButtonNav text="Polls" />
              </Link>
            </li>
            <li>
              <ButtonNav text="Sign Up" />
            </li>
            <li>
              <ButtonNav text="Connect" />
            </li>
            <li>
              <Switch />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
