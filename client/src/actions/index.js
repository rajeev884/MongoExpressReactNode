import { FETCH_USER } from "./types";
import axios from 'axios';

// export const fetchusers=()=>{
//     return function(dispatch){
//        axios.get('/api/currentuser')
//        .then(res=>dispatch({
//                     type:FETCH_USER,
//                     payload:res
//                     })
//             )
//     }
    
// }
export const fetchusers=()=> async dispatch=>{
    const res = await axios.get('/api/currentuser');
    dispatch({type:FETCH_USER,payload:res.data});
 
  }
