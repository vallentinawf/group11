import * as React from 'react';
import Logo from '../assets/logoTransparent.png';

export default function Navbar() {
  return (
    <div className="w-screen h-[80px] bg-white fixed drop-shadow-lg z-10">
      <div className="px-2 flex justify-between items-center w-full h-full">
        {/* div for Remo Logo */}
        <div className="flex items-center">
          <img
            className="object-scale-down h-[80px] w-[80px]"
            src={Logo}
            alt="Logo"
          ></img>
        </div>

        {/* div for buttons */}
        <div className="flex pr-4">
          <button className="border-none bg-transparent font-primary pr-4 text-black">
            Help
          </button>
          <button className="border-none bg-transparent font-primary pl-4 text-black">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
