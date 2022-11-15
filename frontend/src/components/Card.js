import * as React from 'react';
import Logo from '../assets/logoTransparent.png';
import vario from '../assets/vario.png';

export default function Card(motors) {
  const motorId = motors.motors.data.rental;

  return (
    <div className="grid grid-cols-1 gap-y-[50px] place-items-center max-w-[1250px] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-[57px] md:gap-x-[57px] ">
      {motorId.map((motor) => {
        const { _id } = motor;
        return (
          <arcticle
            key={_id}
            className="flex flex-col items-center bg-white px-[30px] justify-between content-between gap-y-[50px] pb-[40px] max-w-[330px] h-[300px] w-[300px] rounded-[47px]"
          >
            <div>
              <p className="font-poppins font-bold bg-[#D62340] rounded-[63px] px-[41px] text-white text-[20px] text-center mb-[50px]"></p>
              <img src={vario} alt="" />
              <p className="text-white text-center font-poppins font-semibold text-[14px]">
                Desc
              </p>
            </div>
            <div>
              <a className="bg-white no-underline text-black font-poppins px-[25px] py-[10px] rounded-[31px] font-semibold text-[13px]">
                READ MORE
              </a>
            </div>
          </arcticle>
        );
      })}
    </div>
  );
}
