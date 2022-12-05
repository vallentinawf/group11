// //for later use
// export const getCurrentUserReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'GET_CURRENT_USER_REQUEST':
//       return {
//         loading: true,
//       };
//     case 'GET_CURRENT_USER_SUCCESS':
//       return {
//         userData: action.payload,
//         loading: false,
//       };
//     case 'GET_CURRENT_USER_FAILED':
//       return {
//         error: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// // export const registerUserReducer = (state = {}, action) => {
// //   switch (action.type) {
// //     case 'UREGISTER_USER_REQUEST':
// //       return {
// //         ...state,
// //         loading: true,
// //       };
// //     case 'REGISTER_USER_SUCCESS':
// //       return {
// //         ...state,
// //         loading: false,
// //         success: true,
// //       };
// //     case 'REGISTER_USER_FAILED':
// //       return {
// //         ...state,
// //         loading: true,
// //         error: 'User Already Registred',
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // export const loginReducer = (state = {}, action) => {
// //   switch (action.type) {
// //     case 'LOGIN_USER_REQUEST':
// //       return {
// //         ...state,
// //         loading: true,
// //       };
// //     case 'LOGIN_USER_SUCCESS':
// //       return {
// //         ...state,
// //         loading: false,
// //         success: true,
// //       };
// //     case 'LOGIN_USER_FAILED':
// //       return {
// //         ...state,
// //         loading: false,
// //         error: 'Invalid Credentials',
// //       };

// //     default:
// //       return state;
// //   }
// // };

// // //for later use
// // export const registerNewUserReducer = (state = {}, action) => {
// //   switch (action.type) {
// //     case 'USER_REGISTER_REQUEST':
// //       return {
// //         ...state,
// //         loading: true,
// //       };
// //     case 'USER_REGISTER_SUCCESS':
// //       return {
// //         ...state,
// //         loading: false,
// //         success: true,
// //       };
// //     case 'USER_REGISTER_FAILED':
// //       return {
// //         ...state,
// //         loading: true,
// //         error: 'User Already Registred',
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // export const loginReducer = (state = {}, action) => {
// //   switch (action.type) {
// //     case 'USER_LOGIN_REQUEST':
// //       return {
// //         ...state,
// //         loading: true,
// //       };
// //     case 'USER_LOGIN_SUCCESS':
// //       return {
// //         ...state,
// //         loading: false,
// //         success: true,
// //       };
// //     case 'USER_LOGIN_FAILED':
// //       return {
// //         ...state,
// //         loading: false,
// //         error: 'Invalid Credentials',
// //       };

// //     case 'USER_LOGOUT':
// //       return {
// //         ...state,
// //       };
// //     default:
// //       return state;
// //   }
// // };
