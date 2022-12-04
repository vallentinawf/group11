import { FaEdit } from 'react-icons/fa';
import { UpDelMotorModal } from '..';
import React, { useEffect, useState } from 'react';

export default function MotorTable(motors) {
  const motorId = motors.motors.data.rental;
  return (
    <div className="">
      {motorId.map((motor) => (
        <div
          className="grid grid-cols-4 gap-3 px-[15px] justify-between bg-[#f8f3f3] rounded-md shadow-md shadow-drop-md h-[30px] items-center mb-[4px]"
          key={motorId._id}
        >
          <p className="">{motor.name}</p>
          <p className="">{motor._id}</p>
          <p>{motor.status}</p>
          <div className="flex justify-between ">
            <p>{motor.quantity}</p>
            <p>{motor.price}</p>
            <button>
              <UpDelMotorModal id={motor._id} motors={motors} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
