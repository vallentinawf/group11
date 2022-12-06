import React from 'react';
import { Navbar } from '../../components';
import { Outlet } from 'react-router';

export default function WithNav() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>

      <div className="pt-[0px]">
        <Outlet />
      </div>
    </>
  );
}
