import Logo from '../../assets/logoTransparent.png';
import { Link } from 'react-router-dom';
import useUser from '../../context/userContext';
import { useEffect, useState } from 'react';
import NavButton from '../Buttons/NavButtons';

export default function Navbar() {
  const { getCurrentUser, role, Logout } = useUser();

  const handleLogOut = async () => {
    await Logout();
  };

  useEffect(() => {
    getCurrentUser();
    console.log(role);
  }, [role]);

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

          {role && role === 'admin' ? (
            <NavButton
              path={'/dashboard/admin/motorbike'}
              text={'Dashboard Admin'}
            />
          ) : null}

          {role && role === 'user' ? (
            <NavButton
              path={'/dashboard/user/booking'}
              text={'Dashboard User'}
            />
          ) : null}

          {(role && role === 'user') || (role && role === 'admin') ? (
            <NavButton path={'/'} text={'Logout'} handleClick={handleLogOut} />
          ) : (
            <NavButton path={'/login'} text={'Login'} />
          )}
        </div>
      </div>
    </div>
  );
}
