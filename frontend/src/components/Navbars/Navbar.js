import { useContext } from 'react';
import Logo from '../../assets/logoTransparent.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import axios from 'axios';

const handleLogOut = async () => {
  try {
    const url = 'http://localhost:5000/api/v1/auth/logout';
    const response = await axios.post(url, { withCredentials: true });
  } catch (err) {
    alert(err.response.data.error.toString());
  }
};

export default function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <div className="w-screen h-[70px] bg-white fixed shadow-lg drop-shadow-lg z-10">
      <div className="px-5 flex justify-between items-center w-full h-full">
        {/* div for Remo Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img className="h-[80px] w-[80px]" src={Logo} alt="Logo"></img>
          </Link>
        </div>

        <div className="flex gap-5 pr-5">
          <Link
            to="/"
            className="border-none bg-transparent font-primary  text-black"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="border-none bg-transparent font-primary text-black"
          >
            About Us
          </Link>
          <Link
            to="/list-motor"
            className="border-none bg-transparent font-primary  text-black"
          >
            List Motor
          </Link>
          {user.role === 'admin' && (
            <Link
              to="/dashboard/admin/motorbike"
              className="border-none bg-transparent font-primary  text-black"
            >
              Dashboard Admin
            </Link>
          )}
          {user.role === 'user' && (
            <Link
              to="/dashboard/user/booking"
              className="border-none bg-transparent font-primary  text-black"
            >
              Dashboard User
            </Link>
          )}
          {user.role.toString() === 'none' ? (
            <Link
              to="/login"
              className="border-none bg-transparent font-primary  text-black"
            >
              Log in
            </Link>
          ) : (
            <Link
              to="/"
              onClick={() => {
                handleLogOut();
                localStorage.setItem('role', 'none');
              }}
              className="border-none bg-transparent font-primary  text-black"
            >
              Sign out
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
