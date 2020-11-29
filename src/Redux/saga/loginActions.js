

import axios from 'axios'
import { urls } from '../../Configuration/urls';
import { call, put } from 'redux-saga/effects';

function callLogin(userCredentials){
    return axios.post(urls.base+urls.login,userCredentials);
}

export function* loginHandler(action){
    let userCredentials=action.data;

    try{
     let response =yield call(callLogin,userCredentials);
     console.log(response.data);
     localStorage.setItem("token",response.data.token);
     localStorage.setItem("username",response.data.username);
     localStorage.setItem("usertype",response.data.usertype);
     response = yield put({type:"LOGIN_ACTION", data:{status: true, errormessages: []}})
     
    }
    catch(e){
        console.log(e)
        yield put({type:"LOGIN_ACTION", data:{status: false, errormessages: "Invalid Credentials"}})
    }
}