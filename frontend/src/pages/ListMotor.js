import * as React from 'react';
import { Modal, MotorData, Sidebar, Card, useFetch } from '../components';

export default function ListMotor() {
  const {
    error,
    isPending,
    data: motors,
  } = useFetch('http://localhost:5000/api/v1/rental/');
  return (
    <div className="bg-[#E5E5E5] pt-[20px]">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {motors && <Card motors={motors} />}
    </div>
  );
}
