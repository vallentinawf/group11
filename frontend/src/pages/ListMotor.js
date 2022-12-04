import * as React from 'react';
import { Card, Loader } from '../components/index';
import useFetch from '../Utils/Hooks/useFetch';

import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getMotors } from '../context/actions/motorActions';

export default function ListMotor() {
  const dispatch = useDispatch()
  const getMotorsState = useSelector(state =>state.getMotorsReducer)
  const {motors , loading , error} = getMotorsState

  useEffect(() => {
    dispatch(getMotors())      
  }, [])

  // const {
  //   error,
  //   isPending,
  //   data: motors,
  // } = useFetch('http://localhost:5000/api/v1/rental/');

  return (
    <div className="bg-[#E5E5E5] py-[20px] flex flex-col items-center h-min-screen h-full w-full">
      <h2 className="text-orange text-[33px] mb-[40px] font-bold">
        Pricing Table
      </h2>
      <div className="">
        {error && <div>{error}</div>}
        {loading && (
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
