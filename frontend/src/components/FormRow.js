import React from 'react';
import { CiMail, CiLock } from "react-icons/ci";

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
  icon
}) => {
  return (
    <div className="flex flex-col py-2 px-5">
      <label htmlFor={name} className="text-black/50">
        {labelText || name}
      </label>
      <div className='flex items-center justify-center'>
        <input
            type={type}
            value={value}
            name={name}
            onChange={handleChange}
            className="p-2 w-full rounded-lg placeholder-black/25 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"
            placeholder={placeholder || labelText || name}
          ></input>
          <p className='text-[25px] bg-orange rounded-md ml-[-50px] flex items-center justify-center w-[50px] h-[40px]'>
            {icon}
          </p>
      </div>
    </div>
  );
};

export default FormRow;
