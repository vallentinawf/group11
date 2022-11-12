import * as React from 'react';
import { FormRow, Alert } from '../components';

export default function Profile() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 h-screen w-full">
      <div className="bg-gray flex flex-col justify-center">
        <Alert></Alert>
        <p>HALOOO</p>
      </div>
    </div>
  );
}
