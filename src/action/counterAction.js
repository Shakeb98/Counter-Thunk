export const Increment = 'Increment_Value'
export const Decrement = 'Decrement_Value'

// export const IncValue = (data) => {
//     return {
//         type: Increment,
//         payload: data
//     }
// }

// export const IncValue =(num)=>dispatch=>{
//     setTimeout(() => {
//         dispatch({type:Increment,payload:num})
//     }, 3000);
// }

export const IncValue =num =>{
    return dispatch=>{
        setTimeout(() => {
               dispatch({type:Increment,payload:num})
            }, 3000);
    }
}

export const DecValue = (data) => {
    return {
        type: Decrement,
        payload: data
    }
}


// export const getMovies = (data) => dispatch => {
//     //appCall.then(() => {
//         if(res){
//             dispatch({
//                 type: Decrement,
//                 payload: res
//             })            
//         }
//     })
    
// }