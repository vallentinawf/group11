import {} from 'react-icons/fa';
import { React, useState } from 'react';
import { Modal, MotorData, Sidebar, useFetch } from '../components';

export default function DashAdmMotorBike(props) {
  const {
    error,
    isPending,
    data: motors,
  } = useFetch('http://localhost:5000/api/v1/rental/');

  return (
    <div className="h-[100vh] flex px-[2%] py-[2%]">
      <Sidebar />
      <div className="gird  ml-5 w-[85%] relative">
        <div className="flex justify-between items-center">
          <h2 className="text-[30px]">Data Table Motor Bike</h2>
          <div className="flex gap-5">
            <input
              className="drop-shadow-xl rounded-xl w-full py-2 px-3 h-[40px] w-[300px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              id="searchItems"
              type="text"
              placeholder="search items"
            ></input>
            <Modal />
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

        <div className="grid grid-cols-4 gap-3 px-[15px] justify-between bg-[#eeecec] rounded-md shadow-drop-md h-[30px] items-center mt-[30px]">
          <p>Name</p>
          <p>Bike id</p>
          <p>Status</p>
          <p>Rate</p>
          <p></p>
        </div>
        <div className=" rounded-md shadow-drop-md bg-[#F8F8F8] h-[54vh] overflow-auto">
          <div className="">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {motors && <MotorData motors={motors} />}
          </div>
        </div>
      </div>
    </div>
  );
}
