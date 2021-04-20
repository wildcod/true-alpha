import axios from 'axios'

import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_START,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    AUTH_ERROR,
    LOGOUT_SUCCESS
} from '../types'

import { returnErrors } from './errorAction'

export const initiateSignup = ({name, email, password}) => async(dispatch) => {

    try{

        dispatch({
            type : SIGNUP_START
        })

        const res = await axios.post('/users/signup',{
            email,password,name
        })

        console.log(res)

        dispatch({
            type : SIGNUP_SUCCESS
        })

    }catch(e){

        dispatch(
            returnErrors(e.response.data, e.response.status, 'SIGNUP_FAIL')
        );
        dispatch({
            type: SIGNUP_FAIL
        });
    }

}

export const initiateLogin = ({email, password}) => async(dispatch) => {

    try{

        dispatch({
            type : LOGIN_START
        })

        const res = await axios.post('/users/login',{
            email,password
        })

        // console.log(res.data)

        dispatch({
            type : LOGIN_SUCCESS,
            payload : {
                data : res.data
            }
        })

    }catch(e){

        dispatch(
            returnErrors(e.response.data, e.response.status, 'LOGIN_FAIL')
        );
        dispatch({
            type: LOGIN_FAIL
        });
    }

}

export const initiateLogout = () => async(dispatch) => {
    try{
        dispatch({
            type : LOGOUT_SUCCESS
        })
    }catch(e){

        dispatch(
            returnErrors(e.response.data, e.response.status, 'SIGNOUT_FAIL')
        );
    }
};