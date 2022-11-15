import { FaEdit } from 'react-icons/fa';
import { ModalUpDate } from '.';
import React, { useEffect, useState } from 'react';

export default function MotorData(motors) {
  const motorId = motors.motors.data.rental;
  return (
    <div className="">
      {motorId.map((motor) => (
        <div
          className="grid grid-cols-4 gap-3 px-[15px] justify-between bg-[#f8f3f3] rounded-md shadow-drop-md h-[30px] items-center "
          key={motorId._id}
        >
          <p>{motor.name}</p>
          <p>{motor._id}</p>
          <p>{motor.status}</p>
          <div className="flex justify-between">
            <p>{motor.price}</p>
            <button>
              <ModalUpDate id={motor._id} motors={motors} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
