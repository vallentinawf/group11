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

// export const updateMotors =(id , updatedMotors)=> dispatch=>{

//     dispatch({type:'UPDATE_PRODUCT_REQUEST'})
  
//     axios.post('http://localhost:5000/api/v1/rental/', {id , updatedMotors}).then(res=>{
//       console.log(res);
//       dispatch({type:'UPDATE_MOTORS_SUCCESS'})
//     }).catch(err=>{
//       dispatch({type:'UPDATE_MOTORS_FAILED'})
//     })
  
// }