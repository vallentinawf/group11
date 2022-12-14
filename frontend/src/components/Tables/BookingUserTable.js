import { FaEdit } from 'react-icons/fa';
import { ModalUDBook, ModalUpDate } from '../index';
import React, { useEffect, useState } from 'react';
import useUser from '../../context/userContext';

export default function BookingTable() {
  const { username, role, userData } = useUser();

  // const bookId = userProfile.data.data.booking;
  console.log('userData', userData.booking);

  return (
    <div className="">
      {userData.booking &&
        userData.booking.map((book) => (
          <div
            className="grid grid-cols-6 gap-3 px-[15px] justify-between bg-[#f8f3f3] rounded-md shadow-md shadow-drop-md h-[30px] items-center mb-[4px]"
            key={book._id}
          >
            <p className="col-span-2">{book._id}</p>
            <p className="">{book.rentalId.name}</p>
            <p className="">{book.rentalId.price}/day</p>
            <p className="">{book.bookingAt.substring(0, 10)}</p>
            <p className="">{book.Returned.toString()}</p>
          </div>
        ))}
    </div>
  );
}
