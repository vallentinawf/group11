import React from 'react';
import yamahaImg from '../../assets/yamaha.jpg';
import hondaImg from '../../assets/honda.jpg';
import { Link } from 'react-router-dom';
export default function Offer() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white pt-10 pb-10">
      {/* div for section text */}
      <div className="text-center">
        <h2 className="text-orange font-bold text-6xl relative">
          What do we offer?
        </h2>
      </div>
      {/* div for "what we offer" */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-5 pt-12 sm:pt-20 text-black">
        <div className="bg-gray rounded-lg">
          <div className="p-8">
            <div className="flex items-center justify-center">
              <label className="flex h-40 w-40 flex-col items-center justify-center rounded-full border-4 bg-white">
                <h1 className="text-7xl flex justify-center">💸</h1>
              </label>
            </div>
            <h3 className="font-bold font-primary text-2xl my-6">
              Affordable Price
            </h3>
            <p className="font-primary text-lg">
              Starting from IDR 35,000, you can rent a motorbike hassle-free.
            </p>
          </div>
        </div>
        <div className="bg-gray rounded-lg">
          <div className="p-8">
            <div className="flex items-center justify-center">
              <label className="flex h-40 w-40 flex-col items-center justify-center rounded-full border-4 bg-white">
                <h1 className="text-7xl flex justify-center">🏍</h1>
              </label>
            </div>
            <h3 className="font-bold font-primary text-2xl my-6">Variety</h3>
            <p className="font-primary text-lg">
              Choose a wide variety of motorbikes, from scooters to motor bebek.
            </p>
          </div>
        </div>
        <div className="bg-gray rounded-lg">
          <div className="p-8">
            <div className="flex items-center justify-center">
              <label className="flex h-40 w-40 flex-col items-center justify-center rounded-full border-4 bg-white">
                <h1 className="text-7xl flex justify-center">👑</h1>
              </label>
            </div>
            <h3 className="font-bold font-primary text-2xl my-6">Quality</h3>
            <p className="font-primary text-lg">
              Motorbikes are always in top notch condition!
            </p>
          </div>
        </div>
      </div>

      {/* div for "See all motorcycles" button */}
      <div className="pt-10 grid justify-items-center">
        <Link to="/list-motor">
          <button className="w-56 py-2 bg-orange text-white font-bold rounded-md shadow-md shadow-black/25 hover:shadow-orange/25">
            See all motorcycles
          </button>
        </Link>
      </div>

      {/* div for two motorcycle images */}
      <div className="w-full flex justify-center pt-12 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
          {/* div for motorcycle one */}
          <div className="rounded-lg relative flex items-center">
            <div className="absolute w-[400px] bg-gray/0 rounded-lg text-orange text-center pt-6">
              <h1 className="font-bold font-primary text-5xl">Yamaha</h1>
            </div>
            <img
              className="w-[400px] object-cover rounded-lg border-darkblue border-4"
              src={yamahaImg}
              alt="Yamaha"
            ></img>
          </div>

          {/* div for motorcycle two */}
          <div className="rounded-lg relative flex items-center">
            <div className="absolute w-[400px] bg-gray/0 rounded-lg text-orange text-center pt-6">
              <h1 className="font-bold font-primary text-5xl">Honda</h1>
            </div>
            <img
              className="w-[400px] object-cover rounded-lg border-darkblue border-4"
              src={hondaImg}
              alt="Honda"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
