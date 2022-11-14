import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions";

const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT){
        return {...state,
                showAlert:true,
                alertType:'Please try again', 
                alertText: 'Some of the fields are empty.'
            };
    };
    if(action.type === CLEAR_ALERT){
        return {...state,
                showAlert: false,
                alertType:"", 
                alertText:"",
            };
    };
    throw new Error(`no such action : ${action.type}`);
}

export default reducer;