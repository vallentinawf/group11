import { React, useState, useEffect } from 'react';
import { Sidebar, BookingTable, Loader } from '../../components/index';
import useFetch from '../../Utils/Hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export default function DashAdmBooking(props) {
  const navigate = useNavigate();

  // const { data: userData } = useFetch(
  //   'http://localhost:5000/api/v1/user/profile'
  // );

  const {
    error,
    isPending,
    data: books,
  } = useFetch('http://localhost:5000/api/v1/booking');

  // useEffect(() => {
  //   navigate(userData.data.user.role.role === 'admin' ? null : '/');
  // }, []);

  return (
    <div className="h-[100vh] flex px-[2%] py-[2%] pt-[70px] mb-[70px]">
      <Sidebar data={books} />
      <div className="gird  ml-5 w-[85%] relative">
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] md:text-[30px] shadow-md drop-shadow-md">
            Booking Data
          </h2>
          <div className="flex gap-5 items-center">
            <input
              className="shadow-lg drop-shadow-xl rounded-xl py-2 px-3 h-[40px] w-[400px] text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
              id="searchItems"
              type="text"
              placeholder="search items"
            ></input>
            {/* <Modal /> */}
          </div>
        </div>

        <div className=" rounded-md shadow-md shadow-drop-md bg-[#F8F8F8] h-[80vh] mt-[30px] overflow-auto">
          <div className="min-w-[1000px] ">
            <div className="grid grid-cols-4 gap-3 px-[15px] justify-between bg-[#eeecec] rounded-md shadow-md shadow-drop-md h-[30px] items-center mb-[4px]">
              <p>motor id</p>
              <p>user id</p>
              <p>Booking at</p>
              <p>Returned</p>
              <p></p>
            </div>
            {error && <div>{error}</div>}
            {isPending && <Loader />}
            {books && <BookingTable books={books} />}
          </div>
        </div>
      </div>
    </div>
  );
}
