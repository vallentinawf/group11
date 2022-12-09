import { FaEdit } from 'react-icons/fa';
import { UpDelMotorModal } from '..';
import React, { useEffect, useState } from 'react';

export default function MotorTable(props) {
  const motorId = props.motors.data.rental;
  const searchkey = props.searchkey
  console.log(props.motors)
  return (
    <div className="">
      {motorId
      .filter(motor =>
        motor.name.toLowerCase().includes(searchkey.toLowerCase()))
      .map((motor) => (
        <div
          className="grid grid-cols-4 gap-3 px-[15px] justify-between bg-[#f8f3f3] rounded-md shadow-md shadow-drop-md h-[30px] items-center mb-[4px]"
          key={motor._id}
        >
          <p className="">{motor.name}</p>
          <p className="">{motor._id}</p>
          <p>{motor.status}</p>
          <div className="flex justify-between ">
            <p>{motor.quantity}</p>
            <p>{motor.price}</p>
            <button>
              <UpDelMotorModal id={motor._id} motors={props.motors} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
