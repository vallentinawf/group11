import React from 'react';

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
}) => {
  return (
    <div className="flex flex-col py-2 px-5">
      <label htmlFor={name} className="text-black/50">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="p-2 w-full rounded-lg placeholder-black/25 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"
        placeholder={placeholder || labelText || name}
      ></input>
    </div>
  );
};

export default FormRow;
