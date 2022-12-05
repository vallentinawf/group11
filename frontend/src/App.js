import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Login,
  Profile,
  ListMotor,
  Error,
  Register,
  AboutUs,
  DashAdmMotorBike,
  Landing,
  DashAdmBooking,
  DashUser,
} from './pages';

import {
  Footer,
  Navbar,
  SuccessModal,
  EditProfileForm,
} from './components/index';

import { useState } from 'react';

function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <BrowserRouter>
      {showNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/edit-profile" element={<EditProfileForm />} />
        <Route path="/modal" element={<SuccessModal />} />
        <Route path="/landing" element={<Landing />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/dashboard/admin/motorbike"
          element={<DashAdmMotorBike />}
        />
        <Route path="/dashboard/admin/booking" element={<DashAdmBooking />} />
        <Route path="/dashboard/user/booking" element={<DashUser />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list-motor" element={<ListMotor />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {showNav}
    </BrowserRouter>
  );
}

export default App;
