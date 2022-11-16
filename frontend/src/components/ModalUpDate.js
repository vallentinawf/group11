import { FaEdit } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

export default function Modal(id) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [price, setPrice] = useState('');
  const [_id, setId] = useState('');

  const keyid = id.id;
  const motorData = id.motors.motors.data.rental;
  const [motors, setMotors] = useState(motorData);

  const handleUpdate = () => {
    const motor = { name, type, status, price };
    console.log(_id);
    fetch('http://localhost:5000/api/v1/rental/' + _id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(motor),
    });
  };

  const handleDelete = () => {
    fetch('http://localhost:5000/api/v1/rental/' + _id, {
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
            {motors
              .filter((motor) => motor._id === keyid)
              .map((fmotor) => (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#423e3e]/50">
                  <div className="relative my-6 mx-auto w-[600px]">
                    <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-center p-5 rounded-t ">
                        <h3 className="text-3xl font=semibold">
                          Edit Motor Data
                        </h3>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <form
                          className="bg-gray shadow-md rounded px-8 pt-6 pb-8 w-full text-left text-black"
                          // onSubmit={
                        >
                          <label className="block  text-sm font-bold mb-1 ">
                            Motor id
                          </label>
                          <select
                            className="shadow border rounded-xl w-full py-2 px-1 appearance-none "
                            value={_id}
                            onChange={(e) => setId(e.target.value)}
                          >
                            <option value={fmotor._id}>{fmotor._id}</option>
                          </select>
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Name
                          </label>
                          <input
                            className="shadow  border rounded-xl w-full py-2 px-1 "
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Type
                          </label>
                          <select
                            className="shadow border rounded-xl w-full py-2 px-1 "
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                          >
                            <option value="manual">Manual</option>
                            <option value="matic">Matic</option>
                          </select>
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Status
                          </label>
                          <select
                            className="shadow border rounded-xl w-full py-2 px-1 "
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
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
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
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
                                setId(fmotor._id);
                                setName(fmotor.name);
                                setType(fmotor.type);
                                setStatus(fmotor.status);
                                setPrice(fmotor.price);
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
