import { createContext, useReducer, useContext } from 'react';
import userReducer, { initialState } from './userReducer';
import axios from 'axios';

import useFetch from '../Utils/Hooks/useFetch';

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

  const getCurrentUser = async () => {
    try {
      const url = 'http://localhost:5000/api/v1/user/profile';
      const response = await axios.get(url, { withCredentials: true });
      const userData = response.data.data;

      dispatch({ type: GET_CURRENT_USER, payload: userData });
    } catch (err) {
      console.log(err.response.data.error.toString());
    }
  };

  const Logout = async () => {
    try {
      const url = 'http://localhost:5000/api/v1/auth/logout';
      const response = await axios.post(url, { withCredentials: true });
      dispatch({ type: LOGOUT, payload: '' });
    } catch (err) {
      console.log(err.response.data.error.toString());
    }
  };

  const value = {
    getCurrentUser,
    Logout,
    userId: state.userId,
    email: state.email,
    username: state.username,
    role: state.role,
    bookingHistory: state.bookingHistory,
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
