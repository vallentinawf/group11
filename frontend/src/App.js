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

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list" element={<ListMotor />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
