import * as React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="w-full mx-auto py-4 px-6 text-white bg-black">
      <div className="grid lg:grid-cols-3 flex justify-between sm: px-5 py-4 gap-2">
        <div>
          <h6 className="py-2 font-bold text-primary">Information</h6>
          <ul>
            <li className="py-1 text-md text-primary pl-1">About us</li>
            <li className="py-1 text-md text-primary pl-1">Contact</li>
          </ul>
        </div>
        <div>
          <h6 className="py-2 font-bold text-primary">Help</h6>
          <ul>
            <li className="py-1 text-md text-primary pl-1">FAQ</li>
            <li className="py-1 text-md text-primary pl-1">How to rent</li>
          </ul>
        </div>
        <div>
          <h6 className="py-2 font-bold text-primary ">Follow us</h6>
          <ul className="flex justify-between sm:w-[75%] my-4 pl-2 gap-8 ">
            <FaInstagram size={20} />
            <FaFacebookF size={20} />
            <FaYoutube size={20} />
            <FaTwitter size={20} />
          </ul>
        </div>
      </div>
    </div>
  );
}
