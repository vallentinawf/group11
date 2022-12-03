import { useState, useEffect } from 'react';
import { CiMail, CiLock, CiUser } from "react-icons/ci";
import Logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FormRow, Alert } from '../components';
import registerImg from '../assets/registerImg.jpg';
import { useAppContext } from '../context/appContext';
import axios from 'axios';

const initialState = {
  username: '',
  email: '',
  password: '',
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();
  //Using global usestate (appContext)
  const { isLoading, showAlert, displayAlert, registerUser } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = values;
    if (!email || !password || !username) {
      displayAlert();
      return;
    }

    const url = 'http://localhost:5000/api/v1/user/register';

    try {
      await axios.post(
        url,
        {
          email: values.email,
          password: values.password,
          username: values.username,
        },
        { withCredentials: true }
      );
      navigate('/login');
    } catch (e) {
      displayAlert();
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-gray pt-[70px] mb-[70px]">
      <div className="bg-gray flex flex-col justify-center">
        <form
          className="max-w-[500px] bg-gray w-full mx-auto px-10 p-10"
          onSubmit={onSubmit}
        >
          <div className="grid justify-items-center">
            <img
              className="object-scale-down w-6/12"
              src={Logo}
              alt="Logo"
            ></img>
          </div>
          <p className="text-center font-bold p-2 text-black/75">
            Register Into Your Account
          </p>
          {showAlert && <Alert />}
          {/* div for Email Address Input */}
          <FormRow
            type="email"
            name="email"
            labelText="Email"
            value={values.email}
            placeholder="akbarsigit@gmail.com"
            handleChange={handleChange}
            icon = {<CiMail/>}
          />
          {/* div for Username Input */}
          <FormRow
            type="text"
            name="username"
            labelText="Username"
            value={values.username}
            placeholder="akbar sigit"
            handleChange={handleChange}
            icon = {<CiUser/>}
          />
          {/* div for Password Input */}
          <FormRow
            type="password"
            name="password"
            labelText="Password"
            value={values.password}
            placeholder="••••••••"
            handleChange={handleChange}
            icon={<CiLock/>}
          />
          <div className="text-center">
            <button className="text-blue hover:text-darkblue underline">
              Forgot password?
            </button>
          </div>
          {/* div for Button Register */}
          <div className="px-5">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full my-5 py-2 bg-orange text-white font-bold rounded-lg shadow-md shadow-orange/60 hover:shadow-orange/40 "
            >
              Register now
            </button>
          </div>
          <div className="grid justify-items-center">
            <hr className="my-5 w-10/12 h-px bg-transparent border-0 dark:bg-black/25"></hr>
            <span className="absolute my-2.5 px-3 text-sm text-black/25 bg-gray">
              OR
            </span>
          </div>
          {/* div for Button Login */}
          <div className="px-5">
            <Link to="/login">
              <button
                type="button"
                className="border w-full my-5 py-2 font-bold text-orange rounded-lg"
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
      {/* div for login image beside the form */}
      <div className="hidden sm:block">
        <img
          className="w-full h-full object-cover"
          // className="w-full object-cover"
          src={registerImg}
          alt="riding a motorcycle"
        />
      </div>
    </div>
  );
};

export default Register;
