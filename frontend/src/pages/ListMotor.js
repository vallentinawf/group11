import * as React from 'react';
import { Modal, MotorData, Sidebar, Card, useFetch, Loader } from '../components';

import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getMotors } from '../context/actions/motorActions';

export default function ListMotor() {
  const dispatch = useDispatch()
  const getallproductsstate = useSelector(state =>state.getMotorsReducer)
  const {motors , loading , error} = getallproductsstate

  useEffect(() => {
    dispatch(getMotors())      
  }, [])

  // const {
  //   error,
  //   isPending,
  //   data: motors,
  // } = useFetch('http://localhost:5000/api/v1/rental/');

  return (
    <div className="bg-[#E5E5E5] py-[40px] flex flex-col items-center justify-center pt-[100px] ">
      <div className="">
        <h2 className="text-orange text-[33px] mb-[40px] font-bold">
          Pricing Table
        </h2>
      </div>
      {error && <div>{error}</div>}
      {loading && <div><Loader/>Loading...</div>}
      {motors && <Card motors={motors} />}
    </div>
  );
}
