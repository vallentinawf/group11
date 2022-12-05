import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormRow, Alert } from '../components';
import loginImg from '../assets/loginImg.jpg';
import Logo from '../assets/logo.png';
import axios from 'axios';
import { UserContext } from '../context/userContext';
import { useAppContext } from '../context/appContext';
import { CiMail, CiLock } from 'react-icons/ci';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);
  const { displayAlert, showAlert } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }

    const url = 'http://localhost:5000/api/v1/auth/login';

    try {
      const response = await axios.post(
        url,
        { email: values.email, password: values.password },
        { withCredentials: true }
      );

      const user = response.data.user;

      localStorage.setItem('userId', user._id);
      localStorage.setItem('email', user.email);
      localStorage.setItem('username', user.username);
      localStorage.setItem('role', user.role);
      // localStorage.setItem('token', response.data.token);
      localStorage.setItem('borrowedMotorId', user.borrowedMotorId);

      navigate(user.role === 'admin' ? '/dashboard/admin/motorbike' : '/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-gray pt-[70px]">
      <div className="bg-gray flex flex-col justify-center">
        {/* start - Login Form */}
        <form
          className="max-w-[500px] bg-gray w-full mx-auto px-10 p-10"
          onSubmit={onSubmit}
        >
          {/* div for Logo */}
          <div className="grid justify-items-center">
            <img
              className="object-scale-down w-6/12"
              //className="w-[30%]"
              src={Logo}
              alt="Logo"
            ></img>
          </div>
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
                Signup now
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
