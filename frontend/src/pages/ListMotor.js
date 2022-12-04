import * as React from 'react';
import {
  Modal,
  MotorData,
  Sidebar,
  Card,
  useFetch,
  Loader,
} from '../components';

export default function ListMotor() {
  const {
    error,
    isPending,
    data: motors,
  } = useFetch('http://localhost:5000/api/v1/rental/');

  return (
    <div className="bg-[#E5E5E5] py-[20px] flex flex-col items-center h-min-screen h-full w-full">
      <h2 className="text-orange text-[33px] mb-[40px] font-bold">
        Pricing Table
      </h2>

      <div className="">
        {error && <div>{error}</div>}
        {isPending && (
          <div>
            <Loader />
            Loading...
          </div>
        )}
        {motors && <Card motors={motors} />}
      </div>
    </div>
  );
}
