import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Login,
  Profile,
  ListMotor,
  Error,
  Register,
  AboutUs,
  DashAdmMotorBike,
  DashAdmCustomer,
} from './pages';
import { Footer, Modal, Navbar } from './components';
import { useState } from 'react';

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <BrowserRouter>
      {showNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/modal" element={<Modal />} />
        <Route
          path="/dashboard-admin/motorbike"
          element={<DashAdmMotorBike />}
        />
        <Route path="/dashboard-admin/customer" element={<DashAdmCustomer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list" element={<ListMotor />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {showNav && <Footer />}
    </BrowserRouter>
  );
}

export default App;
