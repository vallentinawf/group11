import * as React from 'react';
import { Modal, MotorData, Sidebar, Card, useFetch } from '../components';

export default function ListMotor() {
  const {
    error,
    isPending,
    data: motors,
  } = useFetch('http://localhost:5000/api/v1/rental/');
  return (
    <div className="bg-[#E5E5E5] py-[40px] flex flex-col items-center justify-center ">
      <div className="">
        <h2 className="text-orange text-[33px] mb-[40px]">Pricing Table</h2>
      </div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {motors && <Card motors={motors} />}
    </div>
  );
}
