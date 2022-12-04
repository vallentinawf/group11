import { FaEdit, FaNapster } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalSuccess from './SuccessModal';

export default function ModalUDBook(id) {
  const [showModal, setShowModal] = useState(false);
  const [submission, setSubmission] = useState(false);
  const [userId, setUserId] = useState('');
  const [rentalId, setRentalid] = useState('');
  const [Returned, setReturned] = useState('false');
  const [bookingAt, setBookingAt] = useState('');
  const [bookingId, setId] = useState('');

  const keyid = id.id;

  const bookData = id.books.books.data.booking;
  const [books, setbooks] = useState(bookData);

  const handleReturn = async () => {
    const book = { bookingId };

    try {
      const url = 'http://localhost:5000/api/v1/booking/return';
      const response = await axios.patch(url, book, { withCredentials: true });
    } catch (err) {
      alert(err.response.data.error.toString());
    }
  };

  return (
    <>
      {books
        .filter((book) => book._id === keyid)
        .map((fbook) => (
          <>
            <button
              className="bg-[#eeecec] text-black active:bg-orange/98 h-[30px]]
            font-medium px-2 py-1 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
              type="button"
              onClick={() => {
                setShowModal(true);
                setId(fbook._id);
                setRentalid(fbook.rentalId);
                setUserId(fbook.userId);
                setReturned(fbook.Returned);
                setSubmission(false);
              }}
            >
              <FaEdit />
            </button>
            {showModal ? (
              <>
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#423e3e]/50">
                  <div className="relative my-6 mx-auto w-[600px]">
                    <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-center p-3 rounded-t ">
                        <h3 className="text-3xl font=semibold">
                          Edit book Data
                        </h3>
                      </div>
                      <div className="relative p-5 flex-auto">
                        <form className="bg-gray shadow-md rounded p-3 w-full text-left text-black">
                          <label className="block  text-sm font-bold mb-1 ">
                            book id
                          </label>
                          <input
                            className="shadow  border rounded-xl w-full py-2 px-1 disabled:bg-[#F8F8F8]"
                            disabled
                            type="text"
                            required
                            value={bookingId}
                            onChange={(e) => setId(e.target.value)}
                          />
                          <label className="block  text-sm font-bold mb-1 mt-2 ">
                            User id
                          </label>
                          <input
                            className="shadow  border rounded-xl w-full py-2 px-1 disabled:bg-[#F8F8F8]"
                            disabled
                            type="text"
                            required
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                          />
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Motor id
                          </label>
                          <input
                            className="shadow  border rounded-xl w-full py-2 px-1 disabled:bg-[#F8F8F8]"
                            disabled
                            type="text"
                            required
                            value={rentalId}
                            onChange={(e) => setRentalid(e.target.value)}
                          />
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Returned?
                          </label>
                          <select
                            className="shadow border rounded-xl w-full py-2 px-1 "
                            value={Returned}
                            onChange={(e) => setReturned(e.target.value)}
                          >
                            <option value="true">True</option>
                            <option value="false">False</option>
                          </select>
                          <div className="flex items-center mt-[30px] justify-end rounded-b gap-2">
                            <button
                              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none "
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <button
                              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none "
                              type="button"
                              onClick={() => {
                                handleReturn();
                                setSubmission(true);
                              }}
                            >
                              Update
                            </button>
                            {submission ? <ModalSuccess /> : null}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </>
        ))}
    </>
  );
}
