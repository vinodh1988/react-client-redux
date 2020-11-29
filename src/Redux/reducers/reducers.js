export const loginReducer = (state = {loginstatus: false, errormessages: ""},action) =>{
   switch(action.type){
       case "LOGIN_ACTION":
              return {loginstatus:action.data.status,errormessages: action.data.errormessages}
       default:
              return state
   }
}

export const resourceReducer = (state = {resources: [],skills:[]},action)=>{
       switch(action.type){
          case "RESOURCE_ACTION":
                 return {resources: action.data.resources,skills: action.data.skills}
          case  "SKILL_FILTER":
                 return {resources :action.data, skills:state.skills};
          default:
                 return state;
       }

}