import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormRow, Alert } from '../../components';
import loginImg from '../../assets/loginImg.jpg';
import Logo from '../../assets/logo.png';
import axios from 'axios';
import { useAppContext } from '../../context/appContext';
import { CiMail, CiLock } from 'react-icons/ci';
import useUser from '../../context/userContext';
import jwt from 'jwt-decode';

const initialState = {
  email: '',
  password: '',
};

const Login = (props) => {
  const navigate = useNavigate();
  const { displayAlert, showAlert } = useAppContext();
  const { login } = useUser();
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    await login({ email: values.email, password: values.password });
    const token = localStorage.getItem('token');
    const decodedToken = jwt(token);
    const isAdmin = decodedToken.role === 'admin' ? true : false;
    navigate(isAdmin ? '/dashboard/admin/motorbike' : '/');
  };

  useEffect(() => {}, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }

    handleLogin();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-gray">
      <div className="bg-gray flex flex-col justify-center">
        {/* start - Login Form */}
        <form
          className="max-w-[500px] bg-gray w-full mx-auto px-10 p-10"
          onSubmit={onSubmit}
        >
          {/* div for Logo */}
          <Link to="/">
            <div className="grid justify-items-center">
              <img
                className="object-scale-down w-6/12"
                src={Logo}
                alt="Logo"
              ></img>
            </div>
          </Link>

          <p className="text-center font-bold p-2 text-black/75">
            Login Into Your Account
          </p>
          {showAlert && <Alert />}
          {/* {loading && <Loader />} */}
          {/* div for Email Address Input */}
          <FormRow
            type="email"
            name="email"
            labelText="Email"
            value={values.email}
            placeholder="akbarsigit@gmail.com"
            icon={<CiMail />}
            handleChange={handleChange}
          />
          {/* div for Password Input */}
          <FormRow
            type="password"
            name="password"
            labelText="Password"
            value={values.password}
            placeholder="••••••••"
            icon={<CiLock />}
            handleChange={handleChange}
          />
          {/* div for Forgot Password */}
          <div className="text-center">
            <button className="text-blue hover:text-darkblue underline">
              Forgot password?
            </button>
          </div>
          {/* div for Button Login */}
          <div className="px-5">
            <button className="w-full my-5 py-2 bg-orange text-white font-bold rounded-lg shadow-md shadow-orange/60 hover:shadow-orange/40 ">
              Login now
            </button>
          </div>
          <div className="grid justify-items-center">
            <hr className="my-5 w-10/12 h-px bg-transparent border-0 dark:bg-black/25"></hr>
            <span className="absolute my-2.5 px-3 text-sm text-black/25 bg-gray">
              OR
            </span>
          </div>
          {/* div for Button Signup */}
          <div className="px-5">
            <Link to="/register">
              <button className="border w-full my-5 py-2 font-bold text-orange rounded-lg">
                Sign up
              </button>
            </Link>
          </div>
        </form>
        {/* end - Login Form */}
      </div>
      {/* div for login image beside the form */}
      <div className="hidden sm:block">
        <img
          className="w-full h-full object-cover"
          src={loginImg}
          alt="suzuki motorcycle"
        />
      </div>
    </div>
  );
};

export default Login;
