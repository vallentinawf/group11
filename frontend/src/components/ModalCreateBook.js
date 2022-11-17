import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

export default function ModalCreateMotor(props) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(props.name);
  const [type, setType] = useState(props.type);
  const [status, setStatus] = useState();
  const [price, setPrice] = useState(props.price);
  const [quantity, setQuantity] = useState('');
  const [userId, setUserId] = useState();
  const [rentalId, setRentalId] = useState();

  const handleBooking = (e) => {
    e.preventDefault();
    const book = { rentalId, userId };

    fetch('http://localhost:5000/api/v1/booking/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
  };

  return (
    <>
      <button
        className="bg-orange/95 w-[100px] h-[30px] text-white active:bg-orange/98 
      font-medium px-2 py-1 rounded-md drop-shadow-md hover:drop-shadow-lg outline-none focus:outline-none text-[12px]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Items
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#423e3e]/50">
            <div className="relative my-6 mx-auto w-[500px]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-col items-start justify-center p-5 rounded-t gap-5 ">
                  <div className="flex gap-3">
                    <FaQuestionCircle className="text-[30px] mt-[5px] text-orange/80" />
                    <div className="text-[15px] text-start font-medium">
                      <h3 className="text-[25px] text-start font-bold">
                        Rental this motor ?
                      </h3>
                      <p>Name: {name}</p>
                      <p>Type: {type}</p>
                      <p>Price: {price}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end w-full text-white">
                    <button
                      className="bg-[#ff2424] w-[80px] rounded-md h-[35px]"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button className="bg-orange w-[100px] rounded-md h-[35px]">
                      Sure!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}