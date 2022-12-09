import { FaEdit } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SuccessModal from './SuccessModal';
import { updateMotors, deleteMotors } from '../../context/actions/motorActions';
import Loader from '../Elements/Loader';

export default function UpDelMotorModel(props) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [_id, setId] = useState('');
  const [imageCover, setImageCover] = useState('');

  const keyid = props.id;
  const motorData = props.motors.data.rental;
  const [motors, setMotors] = useState(motorData);

  const updateMotorState = useSelector((state) => state.updateMotorsReducer);
  const { success, updateerror, updateloading } = updateMotorState;

  const deleteMotorState = useSelector((state) => state.deleteMotorsReducer);
  const { delsuccess, loading, error } = deleteMotorState;
  const dispatch = useDispatch();

  function editMotors(e) {
    e.preventDefault();
    const motor = { name, type, status, quantity, price, imageCover };
    dispatch(updateMotors(_id, motor));
  }

  function _deleteMotors(e) {
    e.preventDefault();
    dispatch(deleteMotors(_id));
  }

  return (
    <>
      {motors
        .filter((motor) => motor._id === keyid)
        .map((fmotor) => (
          <>
            <button
              className="bg-[#eeecec] text-black active:bg-orange/98 h-[30px]]
      font-medium px-2 py-1 rounded-md shadow-md hover:shadow-lg outline-none focus:outline-none"
              key={fmotor._id}
              type="button"
              onClick={() => {
                setShowModal(true);
                setId(fmotor._id);
                setName(fmotor.name);
                setType(fmotor.type);
                setStatus(fmotor.status);
                setPrice(fmotor.price);
                setQuantity(fmotor.quantity);
                setImageCover(fmotor.imageCover);
              }}
            >
              <FaEdit className="text-[17px]" />
            </button>
            {showModal ? (
              <>
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#423e3e]/50">
                  <div className="relative my-6 mx-auto w-[600px]">
                    <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-center p-5 rounded-t ">
                        <h3 className="text-3xl font=semibold">
                          Edit Motor Data
                        </h3>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <form className="bg-gray shadow-md rounded px-8 pt-6 pb-8 w-full text-left text-black">
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Motor id
                          </label>
                          <input
                            className="shadow  border rounded-xl w-full py-2 px-1 disabled:bg-[#F8F8F8]"
                            disabled
                            type="text"
                            required
                            value={_id}
                            onChange={(e) => setId(e.target.value)}
                          />
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Name
                          </label>
                          <input
                            className="shadow  border rounded-xl w-full py-2 px-1 "
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Image url
                          </label>
                          <input
                            className="shadow  border rounded-xl w-full py-2 px-1 "
                            type="text"
                            value={imageCover}
                            onChange={(e) => setImageCover(e.target.value)}
                          />
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Type
                          </label>
                          <select
                            className="shadow border rounded-xl w-full py-2 px-1 "
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                          >
                            <option value="manual">Manual</option>
                            <option value="matic">Matic</option>
                          </select>
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Status
                          </label>
                          <select
                            className="shadow border rounded-xl w-full py-2 px-1 "
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                          >
                            <option value="available">Available</option>
                            <option value="not-available">Not available</option>
                          </select>
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Quanity
                          </label>
                          <input
                            className="shadow appearance-none border rounded-xl w-full py-2 px-1 "
                            type="text"
                            required
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                          <label className="block  text-sm font-bold mb-1 mt-2">
                            Price
                          </label>
                          <input
                            className="shadow appearance-none border rounded-xl w-full py-2 px-1 "
                            type="text"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                          <div className="flex items-center justify-end rounded-b gap-3 mt-[15px]">
                            <button
                              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none "
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <button
                              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-[100px]"
                              type="button"
                              onClick={(e) => {
                                editMotors(e);
                                setShowModal(true);
                              }}
                            >
                              Update
                            </button>
                            {loading && <Loader></Loader>}
                            <button
                              className="text-white bg-[#FC3B11] active:bg-[#a1361e] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-[100px]"
                              type="button"
                              onClick={(e) => {
                                _deleteMotors(e);
                              }}
                            >
                              Delete
                            </button>
                            {updateloading && <Loader></Loader>}
                            {delsuccess ? <SuccessModal /> : null}
                            {error && <div>{error}</div>}
                            {updateerror && <div>{error}</div>}
                            {success ? <SuccessModal /> : null}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </>
        ))}
    </>
  );
}

// const handleUpdate = async () => {
//   const motor = { name, type, status, quantity, price, imageCover };
//   try {
//     const url = 'http://localhost:5000/api/v1/rental/' + _id;
//     const response = await axios.patch(url, motor, { withCredentials: true });
//   } catch (err) {
//     alert(err.response.data.error.toString());
//   }
// };

// const handleDelete = async () => {
//   try {
//     const url = 'http://localhost:5000/api/v1/rental/' + _id;
//     const response = await axios.delete(url, { withCredentials: true });
//   } catch (err) {
//     alert(err.response.data.error.toString());
//   }
// };
