import {CHANGE_START_BUTTON,CHANGE_SIGNUP_LOGIN,CHANGE_LOGGEDIN,CHANGE_OPTION,CHANGE_USER} from "./constants.js";

export const handleStartButton=(bool)=>({
    type:CHANGE_START_BUTTON,
})

export const handleSignupLoginButton = (bool) => ({
    type: CHANGE_SIGNUP_LOGIN,
})

export const setLoggedIn = (text) => ({
    type: CHANGE_LOGGEDIN,
    payload: text
})

export const setOption = (text) => ({
    type: CHANGE_OPTION,
    payload: text
})

export const loadUser = (user) => ({
	type : CHANGE_USER,
	payload : user
})
// export const setLoggedIn = () => (dispatch)=>{
//     dispatch({ type: CHANGE_LOGGEDIN_PENDING })
//     fetch("https://localhost:3001/signin")
//     .then(response=>response.json())
//     .then(data=>dispatch({type:CHANGE_LOGGEDIN_SUCCESS,payload:data}))
//     .catch(err=>dispatch({type:CHANGE_LOGGEDIN_FAILED,payload:err}))
// }