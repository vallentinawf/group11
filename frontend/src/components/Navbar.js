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
        <div className="flex pr-5">
          <Link
            to="/"
            className="border-none bg-transparent font-primary pr-4 text-black"
          >
            Help
          </Link>
          <Link
            to="/login"
            className="border-none bg-transparent font-primary pl-4 text-black"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
