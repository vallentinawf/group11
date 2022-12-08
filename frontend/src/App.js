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
  WithNav,
  WithoutNav,
} from './pages';

import {
  Footer,
  Navbar,
  SuccessModal,
  EditProfileForm,
} from './components/index';

import { useState } from 'react';

function App() {
  // const [showNav, setShowNav] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard/admin/motorbike"
            element={<DashAdmMotorBike />}
          />
          <Route path="/dashboard/admin/booking" element={<DashAdmBooking />} />
          <Route path="/dashboard/user/booking" element={<DashUser />} />
          <Route path="*" element={<Error />} />
        </Route>

        <Route element={<WithNav />}>
          <Route element={<Navbar />} />
          <Route path="/" element={<Landing />} />
          <Route path="/edit-profile" element={<EditProfileForm />} />
          <Route path="/modal" element={<SuccessModal />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/list-motor" element={<ListMotor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
