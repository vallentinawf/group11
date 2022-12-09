import Logo from '../../assets/logoTransparent.png';
import { Link } from 'react-router-dom';
import useUser from '../../context/userContext';
import { useEffect, useState } from 'react';
import NavButton from '../Buttons/NavButtons';
import jwt from 'jwt-decode';

export default function Navbar() {
  const { logout, getCurrentUser } = useUser();
  const token = localStorage.getItem('token');
  const [isAdmin, setIsAdmin] = useState(false);

  const setRole = () => {
    const decodedToken = jwt(token);
    setIsAdmin(decodedToken.role === 'admin' ? true : false);
  };

  const handleLogOut = async () => {
    await logout();
  };

  useEffect(() => {
    setRole();
    getCurrentUser();
  }, [isAdmin]);

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
          <NavButton path={'/'} text={'Home'} />
          <NavButton path={'/about-us'} text={'About Us'} />
          <NavButton path={'/list-motor'} text={'List Motor'} />

          {isAdmin ? (
            <NavButton
              path={'/dashboard/admin/motorbike'}
              text={'Dashboard Admin'}
            />
          ) : null}

          {isAdmin === false ? (
            <NavButton
              path={'/dashboard/user/booking'}
              text={'Dashboard User'}
            />
          ) : null}

          {token ? (
            <NavButton
              path={'/login'}
              text={'Logout'}
              handleClick={handleLogOut}
            />
          ) : (
            <NavButton path={'/login'} text={'Login'} />
          )}
        </div>
      </div>
    </div>
  );
}
