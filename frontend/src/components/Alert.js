import React from 'react';

const Alert = ({ bg, message }) => {
  return (
    <div class="bg-orange px-4 py-3" role="alert">
      <p class="font-bold">Informational message</p>
      <p class="text-sm">Some additional text to explain said message.</p>
    </div>
  );
};

export default Alert;
