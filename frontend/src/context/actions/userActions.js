// import axios from 'axios';

// //For later use
// export const getCurrentUser = () => (dispatch) => {
//   dispatch({ type: 'GET_CURRENT_USER_REQUEST' });

//   axios
//     .get('https://remo-backend.vercel.app/api/v1/user/profile', { withCredentials: true })
//     .then((res) => {
//       console.log(res);
//       dispatch({ type: 'GET_CURRENT_USER_SUCCESS', payload: res.data });
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch({ type: 'GET_CURRENT_USER_FAILED', payload: err });
//     });
// };

// // export const registerNewUser = (user) => (dispatch) => {
// //   dispatch({ type: 'USER_REGISTER_REQUEST' });

// //   axios
// //     .post('https://remo-backend.vercel.app/api/v1/user/register', user)
// //     .then((res) => {
// //       dispatch({ type: 'USER_REGISTER_SUCCESS' });
// //       console.log(res);
// //     })
// //     .catch((err) => {
// //       dispatch({ type: 'USER_REGISTER_FAILED', payload: err });
// //       console.log(err);
// //     });
// // };

// export const loginUser = (user) => (dispatch) => {
//   dispatch({ type: 'USER_LOGIN_REQUEST' });

//   axios
//     .post('https://remo-backend.vercel.app/api/v1/auth/login', user)
//     .then((res) => {
//       dispatch({ type: 'USER_LOGIN_SUCCESS' });

//       localStorage.setItem('currentUser', JSON.stringify(res.data));

//       window.location.href = '/';
//     })
//     .catch((err) => {
//       dispatch({ type: 'USER_LOGIN_FAILED', payload: err });
//       console.log(err);
//     });
// };
