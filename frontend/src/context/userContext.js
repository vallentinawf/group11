import { createContext, useReducer, useContext } from 'react';
import userReducer, { initialState } from './userReducer';
import axios from 'axios';
import jwt from 'jwt-decode';

import {
  DELETE_USER,
  GET_ALL_USER,
  GET_CURRENT_USER,
  LOGIN,
  LOGOUT,
  REGISTER,
} from './actions';

const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = async (props) => {
    const url = 'https://remo-backend.vercel.app/api/v1/auth/login';
    // const url = 'http://localhost:5000/api/v1/auth/login';
    try {
      const resLogin = await axios.post(
        url,
        { email: props.email, password: props.password },
        { withCredentials: true }
      );
      const token = resLogin.data.token;
      localStorage.setItem('token', token);

      const decodedToken = jwt(localStorage.getItem('token'));
      console.log(decodedToken, token);
      // const isAdmin = decodedToken.role === 'admin' ? true : false;

      dispatch({ type: LOGIN });
    } catch (e) {
      console.log(e);
    }
  };

  const getCurrentUser = async () => {
    try {
      const url = 'https://remo-backend.vercel.app/api/v1/user/profile';
      // const url = 'http://localhost:5000/api/v1/user/profile';
      const response = await axios.get(url, { withCredentials: true });
      const userData = response.data.data;
      console.log(userData);

      dispatch({ type: GET_CURRENT_USER, payload: userData });
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      const url = 'https://remo-backend.vercel.app/api/v1/auth/logout';
      // const url = 'http://localhost:5000/api/v1/auth/logout';
      await axios.get(url, { withCredentials: true });
      localStorage.setItem('token', 'false');
      dispatch({ type: LOGOUT, payload: '' });
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    getCurrentUser,
    logout,
    login,
    userId: state.userId,
    email: state.email,
    username: state.username,
    role: state.role,
    bookingHistory: state.bookingHistory,
    userData: state.userData,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within UserContext');
  }
  return context;
};

export default useUser;
