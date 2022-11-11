// import Navbar from "./components/Navbar";
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
