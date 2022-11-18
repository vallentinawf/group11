import * as React from 'react';
import Logo from '../assets/logoTransparent.png';
import vario from '../assets/vario.png';
import { ModalCreateBook } from './';

export default function Card(motors) {
  const motorId = motors.motors.data.rental;

  return (
    <div className="grid grid-cols-1 gap-y-[50px] place-items-center max-w-[1250px] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[57px] md:gap-x-[57px] ">
      {motorId.map((motor) => {
        const { _id } = motor;
        return (
          <arcticle
            key={_id}
            className="flex flex-col items-center bg-white px-[30px] justify-between content-between pb-[20px] max-w-[330px] h-[300px] w-[300px] rounded-[10px] p-[10px] gap-3"
          >
            <div className="">
              <img src={vario} alt="vario" className="w-[180px]" />
              <p className="text-black  text-[14px] font-bold ml-[-20px]">
                Rp. {motor.price}/day
              </p>
              <p className="font-semibold ml-[-20px]">{motor.name}</p>
            </div>
            <button>
              <ModalCreateBook
                name={motor.name}
                type={motor.type}
                price={motor.price}
                quantity={motor.quantity}
                rentalId={motor._id}
              />
            </button>
          </arcticle>
        );
      })}
    </div>
  );
}
