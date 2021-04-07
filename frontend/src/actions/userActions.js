import axios from 'axios'
import { 
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

    USER_LIST_RECOMMENDED_REQUEST,
    USER_LIST_RECOMMENDED_SUCCESS,
    USER_LIST_RECOMMENDED_FAIL,

    USER_DETAIL_REQUEST,
    USER_DETAIL_SUCCESS,
    USER_DETAIL_FAIL,

    USER_POSTS_LIST_REQUEST,
    USER_POSTS_LIST_SUCCESS,
    USER_POSTS_LIST_FAIL,

 } from '../constants/userConstants'

 export const listUsers = (keyword = '') => async (dispatch) => {
    try{
        dispatch({type:USER_LIST_REQUEST})

        const {data} = await axios.get(`http://127.0.0.1:8000/api/users${keyword}`)
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


export const listRecommenedUsers = () => async (dispatch) => {
    try{
        dispatch({type:USER_LIST_RECOMMENDED_REQUEST})

        const {data} = await axios.get('http://127.0.0.1:8000/api/users/recommended')
        dispatch({
            type:USER_LIST_RECOMMENDED_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type: USER_LIST_RECOMMENDED_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}   


export const listUserDetails = (username) => async (dispatch) => {
    try{
        dispatch({type:USER_DETAIL_REQUEST})

        const {data} = await axios.get(`http://127.0.0.1:8000/api/users/${username}`)
        dispatch({
            type:USER_DETAIL_SUCCESS,
            payload:data.profile
        })

    }catch(error){
        dispatch({
            type: USER_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}   


export const listUserPosts = (username) => async (dispatch) => {
    try{
        dispatch({type:USER_POSTS_LIST_REQUEST})

        const {data} = await axios.get(`http://127.0.0.1:8000/api/users/${username}/posts`)
        dispatch({
            type:USER_POSTS_LIST_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type: USER_POSTS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}   

