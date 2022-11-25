import * as React from 'react';
import Logo from '../assets/logoTransparent.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="w-screen h-[70px] bg-white fixed shadow-lg drop-shadow-lg z-10">
      <div className="px-5 flex justify-between items-center w-full h-full">
        {/* div for Remo Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img className="h-[80px] w-[80px]" src={Logo} alt="Logo"></img>
          </Link>
        </div>

        {/* div for buttons */}
        <div className="flex gap-5 pr-5">
          <Link
            to="/"
            className="border-none bg-transparent font-primary  text-black"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="border-none bg-transparent font-primary text-black"
          >
            About Us
          </Link>
          <Link
            to="/list-motor"
            className="border-none bg-transparent font-primary  text-black"
          >
            List Motor
          </Link>
          <Link
            to="/dashboard-admin/motorbike"
            className="border-none bg-transparent font-primary  text-black"
          >
            Dashboard Admin
          </Link>
          <Link
            to="/dashboard-user/booking"
            className="border-none bg-transparent font-primary  text-black"
          >
            Dashboard User
          </Link>
          <Link
            to="/login"
            className="border-none bg-transparent font-primary  text-black"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
