import Axios from "axios"
import { call, put } from "redux-saga/effects"
import { urls } from "../../Configuration/urls";

function callResources(){
    return Axios.get(urls.base+urls.resources);
}

function callSkills(){
    return Axios.get(urls.base+urls.skills);
}

export  function* ResourceHandler() {
    try {
   let response = yield call(callResources);
   let response2 = yield call(callSkills);
   yield put({type:"RESOURCE_ACTION",data:{resources : response.data,skills:response2.data}})
    }
    catch(e){
        console.log(e)
    }
   
}