import { FaEdit } from 'react-icons/fa';
import { UpDelBookingModal } from '../index';
import React, { useEffect, useState } from 'react';

export default function BookingTable(books) {
  const bookId = books.books.data.booking;
  console.log(bookId);
  return (
    <div className="">
      {bookId.map((book) => (
        <div
          className="grid grid-cols-4 gap-3 px-[15px] justify-between bg-[#f8f3f3] rounded-md shadow-md shadow-drop-md h-[30px] items-center mb-[4px]"
          key={bookId._id}
        >
          <p className="overflow-x-auto">{book.rentalId}</p>
          <p className="overflow-x-auto">{book.userId}</p>
          <p className="overflow-hidden">{book.bookingAt}</p>
          <div className="flex justify-between">
            <p className="overflow-x-auto">{book.Returned.toString()}</p>
            <button>
              <UpDelBookingModal id={book._id} books={books} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
