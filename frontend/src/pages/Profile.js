import * as React from 'react';
import { FormRow, Alert, EditProfileForm} from '../components';

export default function Profile() {
  return (
    <div className="h-screen w-full">
      <div className="bg-gray flex flex-col justify-center">
        {/* <Alert></Alert> */}
        <EditProfileForm></EditProfileForm>
      </div>
    </div>
  );
}
