export const getMotorsReducer = (state={}, action ) => {
     
    switch (action.type) {
        case 'GET_MOTORS_REQUEST': return{
            loading: true
        }
        case 'GET_MOTORS_SUCCESS': return{
            motors: action.payload,
            loading: false
        }
        case 'GET_MOTORS_FAILED': return{
            error: action.payload,
            loading: false
        }
        default : return state
    }
}