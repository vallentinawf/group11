import {} from 'react-icons/fa';
import { React, useEffect, useState } from 'react';
import { BookingUserTable, SidebarUser } from '../components';
import useFetch from '../Utils/Hooks/useFetch';

export default function DashUser(props) {
  // const [data, setData] = useState(null);

  const {
    error,
    isPending,
    data: userProfile,
  } = useFetch('http://localhost:5000/api/v1/user/profile');

  // useEffect(() => {
  //   axios
  //     .get('', {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       // console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [data]);

  console.log(userProfile);

  return (
    <div className="h-[100vh] flex px-[2%] py-[2%] pt-[70px] mb-[70px]">
      {userProfile && <SidebarUser data={userProfile} />}
      <div className="gird  ml-5 w-[85%] relative">
        <div className="flex justify-between items-center">
          <h2 className="text-[30px]">Data Table Customer</h2>
          <div className="flex gap-5 items-center">
            <input
              className="shadow-xl drop-shadow-xl rounded-xl py-2 px-3 h-[40px] w-[400px] text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
              id="searchItems"
              type="text"
              placeholder="search items"
            ></input>
          </div>
        </div>

        <div className=" rounded-md shadow-drop-md bg-[#F8F8F8] h-[80vh] mt-[30px] overflow-auto">
          <div className="min-w-[1000px] ">
            <div className="grid grid-cols-6 gap-3 px-[15px] justify-between bg-[#eeecec] rounded-md shadow-md shadow-drop-md h-[30px] items-center ">
              <p className="col-span-2">Book id</p>
              <p>Motor name</p>
              <p>Price</p>
              <p>Booked at</p>
              <p>Status</p>
            </div>
            {/* {error && <div>{error}</div>} */}
            {/* {isPending && <div>Loading...</div>} */}
            {userProfile && <BookingUserTable data={userProfile} />}
          </div>
        </div>
      </div>
    </div>
  );
}
