import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Login,
  Profile,
  ListMotor,
  Error,
  Register,
  AboutUs,
  DashboardAdmin,
} from './pages';
import { Footer, Navbar } from './components';
import { useState } from 'react';

function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <BrowserRouter>
      {showNav && (
        <nav>
          <Navbar />
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/dashboard-admin"
          element={<DashboardAdmin funcNav={setShowNav} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list" element={<ListMotor />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {showNav && (
        <footer>
          <Footer />
        </footer>
      )}
    </BrowserRouter>
  );
}

export default App;
