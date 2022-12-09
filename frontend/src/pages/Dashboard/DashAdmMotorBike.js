import { FaSearch } from 'react-icons/fa';
import { React } from 'react';
import {
  Filter,
  Loader,
  CreateMotorModal,
  MotorTable,
  Sidebar,
} from '../../components/';

// import useFetch from '../Utils/Hooks/useFetch';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMotors } from '../../context/actions/motorActions';
import { useNavigate } from 'react-router-dom';
import useUser from '../../context/userContext';

export default function DashAdmMotorBike(props) {
  const { role } = useUser();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getMotorsState = useSelector((state) => state.getMotorsReducer);
  const { motors, loading, error } = getMotorsState;
  const [searchkey, setsearchkey] = useState('')

  useEffect(() => {
    navigate(role === 'admin' ? '/dashboard/admin/motorbike' : '/');
    dispatch(getMotors());
  }, []);

  return (
    <div className="h-[100vh] flex px-[2%] py-[2%] mb-[70px]">
      <Sidebar />
      <div className="gird  ml-5 w-[85%] relative">
        <div className="flex justify-between items-center">
          <h2 className=" text-[20px] md:text-[30px] shadow-md drop-shadow-md">
            Motorbike Data
          </h2>
          <div className="flex gap-5 items-center">
            {/* <Filter /> */}
            <input
                className="shadow-xl drop-shadow-xl rounded-xl py-2 px-3 h-[40px] w-[0px] text-gray-700 leading-tight  focus:outline-none focus:shadow-outline hidden md:block md:w-[250px] xl:w-[400px]"
                id="searchItems"
                type="search"
                placeholder="search items"
                value={searchkey}
                onChange={(e)=>{setsearchkey(e.target.value)}}>
            </input>
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
            {motors && <MotorTable motors={motors} searchkey={searchkey}/>}
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
// } = useFetch('https://remo-backend.vercel.app/api/v1/rental');
