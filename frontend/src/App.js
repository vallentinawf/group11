import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Login,
  ListMotor,
  Error,
  Register,
  AboutUs,
  DashAdmMotorBike,
  Landing,
  DashAdmBooking,
  DashUser,
  EditProfile,
  Profile,
  WithNav,
  WithoutNav
} from './pages';

import {
  Footer,
  Navbar,
  SuccessModal
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit/profile" element={<EditProfile />} />
          <Route path="/modal" element={<SuccessModal />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/list-motor" element={<ListMotor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
