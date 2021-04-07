import axios from 'axios'
import { 
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

 } from '../constants/userConstants'

export const listRecommenedUsers = () => async (dispatch) => {
    try{
        dispatch({type:USER_LIST_REQUEST})

        const {data} = await axios.get('http://127.0.0.1:8000/api/users/recommended')
        dispatch({
            type:USER_LIST_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}   