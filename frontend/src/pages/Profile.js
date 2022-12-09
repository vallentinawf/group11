import * as React from 'react';
import { FormRow, Alert, EditProfileForm} from '../components';

export default function Profile() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-gray flex flex-col justify-center">
        {/* <Alert></Alert> */}
        <EditProfileForm></EditProfileForm>
      </div>
    </div>
  );
}
