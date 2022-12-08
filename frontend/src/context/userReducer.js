import {
  DELETE_USER,
  GET_ALL_USER,
  GET_CURRENT_USER,
  LOGIN,
  LOGOUT,
  REGISTER,
} from './actions';

export const initialState = {
  userId: '',
  email: '',
  username: '',
  role: '',
  bookingHistory: {},
  userData: {},
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      console.log(LOGIN, payload);
      return { ...state };

    case LOGOUT:
      return {
        userId: '',
        email: '',
        username: '',
        role: '',
        bookingHistory: {},
        userData: {},
      };

    case REGISTER:
      console.log(REGISTER, payload);
      return { ...state };

    case DELETE_USER:
      console.log(DELETE_USER, payload);
      return { ...state };

    case GET_CURRENT_USER:
      const userData = payload.user;
      const userBooking = payload.booking;
      return {
        userId: userData._id,
        username: userData.username,
        email: userData.email,
        role: userData.role,
        bookingHistory: userBooking,
        userData: payload,
      };

    case GET_ALL_USER:
      console.log(GET_ALL_USER, payload);
      return { ...state };

    default:
      throw new Error(`no such action: ${action.type}`);
  }
};

export default userReducer;
