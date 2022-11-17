import {
  FaMotorcycle,
  FaUserAlt,
  FaUserCircle,
  FaBars,
  FaPowerOff,
} from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { React, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Sidebar(props) {
  const menuItems = [
    {
      path: 'motorbike',
      name: 'Motor Bike',
      icon: <FaMotorcycle size={25} color="#35373A" />,
    },
    {
      path: 'customer',
      name: 'Customer',
      icon: <FaUserAlt size={20} color="#35373A" />,
    },
  ];
  return (
    <div className="h-[90vh]">
      <div className="bg-[#E5E5E5] h-[100%] w-[100px] md:w-[230px] rounded-lg drop-shadow-xl bg-red flex flex-col justify-between items-center">
        <div>
          <div className="bg-[#F1F2F6] flex h-[50px] md:h-[80px] w-[60px] md:w-[220px] mt-[10px] rounded-lg drop-shadow-md items-center justify-center">
            <div className="hidden md:flex items-center gap-3">
              <FaUserCircle size={30} />
              <div className="mr-[10px]">
                <p>Wellcome back!</p>
                <p>User</p>
              </div>
              <FiSettings size={25} />
            </div>
            <div className="md:hidden ">
              <FaBars size={20} />
            </div>
          </div>
          <div className="mt-[10px]">
            {menuItems.map((item, index) => (
              <NavLink to={`/dashboard-admin/${item.path}`} key={index}>
                <div className="flex flex-col items-center py-[10px]">
                  <button className="w-[50px] bg-[#F1F2F6] drop-shadow-sm rounded-xl h-[40px] md:w-[200px] hover:drop-shadow-md hover:bg-white active:bg-white">
                    <div className="flex gap-4 items-center pl-[10px]">
                      {item.icon}
                      <p className="text-[#35373A] hidden md:block">
                        {item.name}
                      </p>
                    </div>
                  </button>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="">
          <Link to={`/`}>
            <div className="flex flex-col items-center py-[10px] ">
              <button className="w-[50px] bg-orange/95 drop-shadow-sm rounded-xl h-[40px] hover:drop-shadow-md md:w-[200px] hover:bg-orange active:bg-orange">
                <div className="flex gap-4 items-center justify-center md:ml-[-15px] font-medium text-[#35373A]">
                  <FaPowerOff />
                  <p className="text-[#35373A] hidden md:block">Sign out</p>
                </div>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
