import { CHANGE_START_BUTTON, CHANGE_SIGNUP_LOGIN, CHANGE_LOGGEDIN,CHANGE_OPTION,CHANGE_USER} from "./constants.js";

const initialState={
    startButton:true,
    isRegistering:true,
    isLoggedIn:"true",
    option:"play",
    user : {
        email:"angelodiepe10@yahoo.com",
        name:"Diepe Angelo",
    }
}

export const handleLogging=(state=initialState,action={})=>{
    switch (action.type) {
        case CHANGE_START_BUTTON:
            return Object.assign({},state,{startButton:!state.startButton});
        case CHANGE_SIGNUP_LOGIN:
            return Object.assign({}, state, { isRegistering:!state.isRegistering});
        case CHANGE_LOGGEDIN:
            if(action.payload==="false"){
            return Object.assign({}, 
                state, 
                { 
                    isLoggedIn: action.payload,
                    startButton:false,
                    isRegistering:false,
                    user : {}
                });
            }else{
                return Object.assign({},state,{isLoggedIn:action.payload})
            }
        case CHANGE_OPTION:
            return Object.assign({},state,{ option : action.payload })
        case CHANGE_USER:
            return Object.assign({},state,{ user : action.payload })
         default:
            return state;
    }
}
