import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default function Error() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 h-screen w-full bg-gray">
      <div className="grid justify-items-center">
        <img className="object-scale-down w-6/12" src={Logo} alt="Logo"></img>

        <p className="text-center font-bold p-2 text-black/75">Error 404</p>

        <div className="px-5">
          <Link
            className="w-full my-5 py-2 bg-orange text-white font-bold rounded-lg shadow-md shadow-orange/60 hover:shadow-orange/40 p-2"
            to="/"
          >
            Return
          </Link>
        </div>
      </div>
    </div>
  );
}
