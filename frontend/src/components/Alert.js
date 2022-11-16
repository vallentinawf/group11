import React from 'react';
import { useAppContext } from '../context/appContext';

const Alert = () => {
  const { alertBg, alertText, alertType } = useAppContext();
  return (
    <div className={`bg-${alertBg} border-t border-b px-4 py-3"`} role="alert">
      <p className="font-bold">{alertType}</p>
      <p className="text-sm">{alertText}</p>
    </div>
  );
};

export default Alert;