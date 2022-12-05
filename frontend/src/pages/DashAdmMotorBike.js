import { FaSearch } from 'react-icons/fa';
import { React } from 'react';
import {
  Filter,
  Loader,
  CreateMotorModal,
  MotorTable,
  Sidebar,
} from '../components/index';

import useFetch from '../Utils/Hooks/useFetch';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getMotors } from '../context/actions/motorActions';

export default function DashAdmMotorBike(props) {

  const dispatch = useDispatch()
  const getMotorsState = useSelector(state =>state.getMotorsReducer)
  const {motors , loading , error} = getMotorsState

  useEffect(() => {
    dispatch(getMotors())      
  }, [])

  return (
    <div className="h-[100vh] flex px-[2%] py-[2%] pt-[70px] mb-[70px]">
      <Sidebar />
      <div className="gird  ml-5 w-[85%] relative">
        <div className="flex justify-between items-center">
          <h2 className=" text-[20px] md:text-[30px] shadow-md drop-shadow-md">
            Motorbike Data
          </h2>
          <div className="flex gap-5 items-center">
            <Filter />
            <FaSearch className="md:hidden" />
            <CreateMotorModal />
          </div>
        </div>

        <div className=" rounded-md shadow-md shadow-drop-md bg-[#F8F8F8] h-[80vh] mt-[30px] overflow-auto">
          <div className="min-w-[1000px] ">
            <div className="grid grid-cols-4 gap-3 px-[15px] justify-between bg-[#eeecec] rounded-md shadow-lg shadow-drop-lg h-[30px] items-center mb-[4px]">
              <p>Name</p>
              <p>Bike id</p>
              <p>Status</p>
              <div className="flex justify-between ">
                <p>Quantity</p>
                <p>Rate</p>
                <p className="h-[35px] w-[80px]"></p>
              </div>
            </div>
            {error && <div>{error}</div>}
            {loading && <Loader />}
            {motors && <MotorTable motors={motors} />}
          </div>
        </div>
      </div>
    </div>
  );
}

  // const {
  //   error,
  //   isPending,
  //   data: motors,
  // } = useFetch('http://localhost:5000/api/v1/rental');
