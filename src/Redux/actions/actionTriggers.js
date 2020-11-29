export const loginTrigger = (userCredentials)=>{

    return {
        type: "PERFORM_LOGIN",
        data: userCredentials
    }
}

export const resourceTrigger = ()=>{
    return {
        type: "RESOURCE_TRIGGER"
    }
}

export const filterResources =(resources,skill)=>{
 console.log(resources,skill)
 if(skill=="")
    return {
        type: "RESOURCE_TRIGGER"
    }
  
  let result=  resources.filter(x=> {
            console.log(x)
             for( let y in x.skills){
                 
             if(x.skills[y].name==skill.name)
               return true;
             }
             return false;
            }    
        )
    console.log(result)
    return {type : "SKILL_FILTER", data: result}
}