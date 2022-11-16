import { FaEdit } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

export default function Modal(id) {
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState('');
  const [rentalId, setRentalid] = useState('');
  const [Returned, setReturned] = useState('');
  const [bookingAt, setBookingAt] = useState('');
  const [_id, setId] = useState('');

  const keyid = id.id;

  const bookData = id.books.books.data.booking;
  const [books, setbooks] = useState(bookData);

  const handleUpdate = () => {
    const book = { userId, rentalId, Returned, bookingAt };
    fetch('http://localhost:5000/api/v1/booking/' + _id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
  };

  const handleDelete = () => {
    fetch('http://localhost:5000/api/v1/booking/' + _id, {
      method: 'DELETE',
    });
  };

  return (
    <>
      <>
        <button
          className="bg-[#eeecec] text-black active:bg-orange/98 h-[30px]]
      font-medium px-2 py-1 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <FaEdit />
        </button>
        {showModal ? (
          <>
            {books
              .filter((book) => book._id === keyid)
              .map((fbook) => (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#423e3e]/50">
                  <div className="relative my-6 mx-auto w-[600px]">
                    <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-center p-5 rounded-t ">
                        <h3 className="text-3xl font=semibold">
                          Edit book Data
                        </h3>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <form
                          className="bg-gray shadow-md rounded px-8 pt-6 pb-8 w-full text-left text-black"
                          // onSubmit={
                        >
                          <label className="block  text-sm font-bold mb-1 ">
                            book id
                          </label>
                          <select
                            className="shadow border rounded-xl w-full py-2 px-1 appearance-none "
                            value={_id}
                            onChange={(e) => setId(e.target.value)}
                          >
                            <option value={fbook._id}>{fbook._id}</option>
                          </select>
                          <label className="block  text-sm font-bold mb-1 mt-2 disabled">
                            Name
                          </label>
                          <input
                            className="shadow  border rounded-xl w-full py-2 px-1 "
                            type="text"
                            required
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                          />
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Type
                          </label>
                          <select
                            className="shadow border rounded-xl w-full py-2 px-1 "
                            value={rentalId}
                            onChange={(e) => setRentalid(e.target.value)}
                          >
                            <option value="manual">Manual</option>
                            <option value="matic">Matic</option>
                          </select>
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Status
                          </label>
                          <select
                            className="shadow border rounded-xl w-full py-2 px-1 "
                            value={Returned}
                            onChange={(e) => setReturned(e.target.value)}
                          >
                            <option value="available">Available</option>
                            <option value="not-available">Not available</option>
                          </select>
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Price
                          </label>
                          <input
                            className="shadow appearance-none border rounded-xl w-full py-2 px-1 "
                            type="text"
                            required
                            value={bookingAt}
                            onChange={(e) => setBookingAt(e.target.value)}
                          />
                          <div className="flex items-center justify-end p-6 rounded-b">
                            <button
                              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <button
                              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              onClick={(event) => {
                                setId(fbook._id);
                                setUserId(fbook.userId);
                                setRentalid(fbook.rentalId);
                                setReturned(fbook.Returned);
                                setBookingAt(fbook.bookingAt);
                              }}
                            >
                              Load
                            </button>
                            <button
                              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              onClick={handleUpdate}
                            >
                              Update
                            </button>
                            <button
                              className="text-white bg-[#FC3B11] active:bg-[#a1361e] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              onClick={(event) => {
                                handleDelete();
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </>
        ) : null}
      </>
    </>
  );
}
