import axios from "axios"

export const getMotors = () => (dispatch) =>{

    dispatch({type: 'GET_MOTORS_REQUEST'})

    axios
        .get('http://localhost:5000/api/v1/rental/')
        .then(res=>{
            console.log(res);
            dispatch({type: 'GET_MOTORS_SUCCESS', payload : res.data});
    })
        .catch(err=>{
            console.log(err);
            dispatch({type: 'GET_MOTORS_FAILED', payload : err})
    })

}

export const updateMotors =(id, motor)=> dispatch=>{

    dispatch({type:'UPDATE_MOTORS_REQUEST'})
  
    axios
        .patch('http://localhost:5000/api/v1/rental/' + id, motor, { withCredentials: true } )
        .then(res=>{
            console.log(res);
            dispatch({type:'UPDATE_MOTORS_SUCCESS'})
    })
        .catch(err=>{
            dispatch({type:'UPDATE_MOTORS_FAILED'})
    })
  
}

export const deleteMotors = (id) => dispatch => {
    dispatch({type: 'DELETE_MOTORS_REQUEST'})

    axios
        .delete('http://localhost:5000/api/v1/rental/' + id, {withCredentials: true})
        .then(res=>{
            console.log(res);
            dispatch({type: 'DELETE_MOTORS_SUCCESS'})
    })
        .catch(err=>{
            dispatch({type: 'DELETE_MOTORS_FAILED'})
    })

}