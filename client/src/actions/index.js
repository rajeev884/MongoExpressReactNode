import { FETCH_USER } from "./types";
import axios from 'axios';

export const fetchusers=()=>{
    return function(dispatch){
       axios.get('/api/currentuser').then(
           res=>dispatch({
                type:FETCH_USER,
                payload:res
                })
        )
    }
    
}
