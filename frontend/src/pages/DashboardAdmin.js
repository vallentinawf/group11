import { FaMotorcycle, FaUserAlt, FaUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { React, useState } from 'react';

export default function DashboardAdmin(props) {
  props.funcNav(false);
  return (
    <div className="h-[100vh] flex w-full px-[2%] py-[2%] relative">
      <div className="bg-[#E5E5E5] h-[100%] w-[230px] rounded-lg drop-shadow-xl">
        <div className="bg-[#F1F2F6] h-[80px] flex justify-center items-center rounded-lg drop-shadow-md gap-3">
          <FaUserCircle size={30} />
          <div className="">
            <p>Wellcome back!</p>
            <p>User</p>
          </div>
          <FiSettings size={25} />
        </div>
        <div className="flex flex-col items-center gap-4 py-[15px]">
          <button className="w-[200px] bg-[#F1F2F6] drop-shadow-sm rounded-xl h-[40px] hover:drop-shadow-md hover:bg-white active:bg-white">
            <div className="flex gap-4 items-center pl-[10px]">
              <FaMotorcycle size={25} color="#35373A" />
              <p className="text-[#35373A]">Motor Bike</p>
            </div>
          </button>
          <button className="w-[200px] bg-[#F1F2F6] drop-shadow-sm rounded-xl h-[40px] hover:drop-shadow-md hover:bg-white active:bg-white">
            <div className="flex gap-4 items-center pl-[10px]">
              <FaUserAlt size={23} color="#35373A" />
              <p className="text-[#35373A]">Customer</p>
            </div>
          </button>
        </div>
      </div>

      <div className="gird  ml-5 w-[85%] relative">
        <div className="flex justify-between items-center">
          <h2 className="text-[30px]">Data Table</h2>
          <div className="flex gap-5">
            <input
              className="drop-shadow-xl rounded-xl w-full py-2 px-3 h-[40px] w-[300px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              id="searchItems"
              type="text"
              placeholder="search items"
            ></input>
            <button className="bg-orange rounded-lg w-[100px] drop-shadow-md text-white hover:drop-shadow-xl">
              Add items
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-20 mt-[30px]">
          <div className="bg-[#74FC5D] drop-shadow-md rounded-xl w-[150px] h-[100px] flex justify-center items-center flex-col gap-1">
            <h3> Available Bikes</h3>
            <p className="text-[24px] text-bold">5</p>
          </div>
          <div className="bg-[#F74B4B] drop-shadow-md rounded-xl w-[150px] h-[100px] flex justify-center items-center flex-col gap-1 text-white">
            <h3> Rented Bikes</h3>
            <p className="text-[24px] text-bold">5</p>
          </div>
          <div className="bg-[#14213D] drop-shadow-md rounded-xl w-[150px] h-[100px] flex justify-center items-center flex-col gap-1 text-white">
            <h3> Average Rate</h3>
            <p className="text-[24px] text-bold">Rp. 65,000</p>
          </div>
        </div>

        <div className="mt-[30px] rounded-md shadow-drop-md bg-[#F8F8F8] h-[68%]">
          <div className="flex justify-between px-[10px] bg-[#eeecec] rounded-md shadow-drop-md h-[30px] items-center">
            <p>Name</p>
            <p>Bike id</p>
            <p>Status</p>
            <p>Rate</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
