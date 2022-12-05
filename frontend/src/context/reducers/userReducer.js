import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';

const userReducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertBg: 'orange',
      alertText: 'missing value! add all value',
      alertType: 'Error',
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertBg: '',
      alertText: '',
      alertType: '',
    };
  }
  throw new Error(`no such action: ${action.type}`);
};

export default userReducer;

// //for later use
// export const registerNewUserReducer = (state={} , action)=>{
//     switch(action.type)
//     {
//       case 'USER_REGISTER_REQUEST' : return {
//           ...state ,
//           loading : true
//       }
//       case 'USER_REGISTER_SUCCESS' : return {
//           ...state ,
//           loading : false ,
//           success : true
//       }
//       case 'USER_REGISTER_FAILED' : return {
//           ...state ,
//           loading : true,
//           error : 'User Already Registred'
//       }
//       default : return state
//     };
// };

// export const loginReducer = (state={} , action)=>{
//     switch(action.type)
//     {
//       case 'USER_LOGIN_REQUEST' : return {
//           ...state ,
//           loading : true
//       }
//       case 'USER_LOGIN_SUCCESS' : return {
//           ...state ,
//           loading : false ,
//           success : true
//       }
//       case 'USER_LOGIN_FAILED' : return {
//           ...state ,
//           loading : false,
//           error : 'Invalid Credentials'
//       }

//       case 'USER_LOGOUT' : return {
//         ...state
//       }
//       default : return state
//     };
// };
