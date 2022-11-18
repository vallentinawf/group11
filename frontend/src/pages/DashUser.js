import {} from 'react-icons/fa';
import { React, useState } from 'react';
import { useFetch, BookingDataUser, SidebarUser } from '../components';

export default function DashUser(props) {
  const {
    error,
    isPending,
    data: userProfile,
  } = useFetch('http://localhost:5000/api/v1/user/profile');

  return (
    <div className="h-[100vh] flex px-[2%] py-[2%]">
      <SidebarUser />
      <div className="gird  ml-5 w-[85%] relative">
        <div className="flex justify-between items-center">
          <h2 className="text-[30px]">Data Table Customer</h2>
          <div className="flex gap-5 items-center">
            <input
              className="shadow-xl drop-shadow-xl rounded-xl py-2 px-3 h-[40px] w-[400px] text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
              id="searchItems"
              type="text"
              placeholder="search items"
            ></input>
          </div>
        </div>

        <div className=" rounded-md shadow-drop-md bg-[#F8F8F8] h-[80vh] mt-[30px] overflow-auto">
          <div className="min-w-[1000px] ">
            <div className="grid grid-cols-4 gap-3 px-[15px] justify-between bg-[#eeecec] rounded-md shadow-md shadow-drop-md h-[30px] items-center ">
              <p>motor id</p>
              <p>booked at</p>
              <p>Price</p>
              <p>Status</p>
              <p></p>
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {userProfile && <BookingDataUser userProfile={userProfile} />}
          </div>
        </div>
      </div>
    </div>
  );
}
