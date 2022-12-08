export const getMotorsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_MOTORS_REQUEST':
      return {
        loading: true,
      };
    case 'GET_MOTORS_SUCCESS':
      return {
        motors: action.payload,
        loading: false,
      };
    case 'GET_MOTORS_FAILED':
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const deleteMotorsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'DELETE_MOTORS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_MOTORS_SUCCESS':
      return {
        ...state,
        loading: false,
        delsuccess: true,
      };
    case 'DELETE_MOTORS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const updateMotorsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_MOTORS_REQUEST':
      return {
        ...state,
        updateloading: true,
      };
    case 'UPDATE_MOTORS_SUCCESS':
      return {
        ...state,
        updateloading: false,
        success: true,
      };
    case 'UPDATE_MOTORS_FAILED':
      return {
        ...state,
        updateloading: false,
        updateerror: action.payload,
      };

    default:
      return state;
  }
};

export const addMotorsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MOTORS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_MOTORS_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'ADD_MOTORS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
