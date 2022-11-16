import React, { useState } from 'react';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('manual');
  const [status, setStatus] = useState('available');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const motor = { name, type, status, price };
    console.log(motor);

    fetch('http://localhost:5000/api/v1/rental/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(motor),
    });
  };

  return (
    <>
      <button
        className="bg-orange/95 text-black active:bg-orange/98 h-[35px] w-[80px]
      font-medium px-2 py-1 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none text-[12px]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Items
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#423e3e]/50">
            <div className="relative my-6 mx-auto w-[600px]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-center p-5 rounded-t ">
                  <h3 className="text-3xl font=semibold">Add Motor Data</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    className="bg-gray shadow-md rounded px-8 pt-6 pb-8 w-full "
                    // onSubmit={handleSubmit}
                  >
                    <label className="block text-black text-sm font-bold mb-1">
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded-xl w-full py-2 px-1 text-black"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label className="block text-black text-sm font-bold mb-1 mt-2">
                      Type
                    </label>
                    <select
                      className="shadow border rounded-xl w-full py-2 px-1 text-black"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="manual">Manual</option>
                      <option value="matic">Matic</option>
                    </select>
                    <label className="block text-black text-sm font-bold mb-1 mt-2">
                      Status
                    </label>
                    <select
                      className="shadow border rounded-xl w-full py-2 px-1 text-black"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="available">Available</option>
                      <option value="not-available">Not available</option>
                    </select>
                    <label className="block text-black text-sm font-bold mb-1">
                      Price
                    </label>
                    <input
                      className="shadow appearance-none border rounded-xl w-full py-2 px-1 text-black"
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
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                      <button
                        className="text-white bg-[#FC3B11] active:bg-[#a1361e] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Delete
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
