import React from 'react';
import { useAppContext } from '../context/appContext';

const Alert = ({ bg, message }) => {
  const {alertType, alertText} = useAppContext();
  return (
    <div className="bg-orange px-4 py-3" role="alert">
      <p className="font-bold">{alertType}</p>
      <p className="text-sm">{alertText}</p>
    </div>
  );
};

export default Alert;