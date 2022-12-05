import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';

const reducer = (state, action) => {
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

export default reducer;
