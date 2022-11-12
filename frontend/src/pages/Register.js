import { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FormRow, Alert } from '../components';
import loginImg from '../assets/loginImg.jpg';

const initialState = {
  name: '',
  email: '',
  password: '',
  showAlert: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-gray">
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
            Register into your account
          </p>
          {values.showAlert && <Alert />}
          {/* div for Email Address Input */}
          <FormRow
            type="email"
            name="email"
            labelText="Email"
            value={values.email}
            placeholder="akbarsigit@gmail.com"
            handleChange={handleChange}
          />
          {/* div for Username Input */}
          <FormRow
            type="text"
            name="username"
            labelText="Username"
            value={values.name}
            placeholder="akbar sigit"
            handleChange={handleChange}
          />
          {/* div for Password Input */}
          <FormRow
            type="password"
            name="password"
            labelText="Password"
            value={values.password}
            placeholder="••••••••"
            handleChange={handleChange}
          />
          <div className="text-center">
            <button className="text-blue hover:text-darkblue underline">
              Forgot password?
            </button>
          </div>
          {/* div for Button Login */}
          <div className="px-5">
            <button
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
          {/* div for Button login */}
          <div className="px-5">
            <Link
              to={'/'}
              className="border w-full my-5 py-2 font-bold text-orange rounded-lg"
            >
              Login now
            </Link>
          </div>
        </form>
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

export default Register;
