import { data } from 'autoprefixer';
import { FaEdit } from 'react-icons/fa';

export default function MotorData(motors) {
  console.log(motors.motors.data.rental[1].name);
  const motorId = motors.motors.data.rental;
  console.log(motorId[1]._id);
  return (
    <div className="blog-list">
      <div className="grid grid-cols-4 gap-3 px-[15px] justify-between px-[10px] bg-[#eeecec] rounded-md shadow-drop-md h-[30px] items-center">
        <p>Name</p>
        <p>Bike id</p>
        <p>Status</p>
        <p>Rate</p>
        <p></p>
      </div>
      {motorId.map((motor) => (
        <div
          className="grid grid-cols-4 gap-3 px-[15px] justify-between px-[10px] bg-[#f8f3f3] rounded-md shadow-drop-md h-[30px] items-center "
          key={motorId._id}
        >
          <p>{motor.name}</p>
          <p>{motor._id}</p>
          <p>{motor.status}</p>
          <div className="flex justify-between">
            <p>{motor.price}</p>
            <button>
              <FaEdit />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
