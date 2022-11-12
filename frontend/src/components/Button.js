import React from 'react';

const Button = ({ type, bg, text }) => {
  return (
    <button
      type={type}
      className="w-full my-5 py-2 text-white font-bold rounded-lg shadow-md shadow-orange/60 hover:shadow-orange/40"
    >
      {text}
    </button>
  );
};

export default Button;
