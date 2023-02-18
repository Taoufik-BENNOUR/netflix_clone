import axios from "axios"
import { loginFailed, loginLoading, loginSuccess, logout } from "./AuthActions"

export const loginCall = async(user,dispatch) =>{
    dispatch(loginLoading());
    try {
        const response =await axios.post("/auth/login",user)
       response.data.isAdmin &&
        dispatch(loginSuccess(response.data))
    } catch (error) {
        dispatch(loginFailed(error.response.data))
    }
}


export const logoutCall = async(dispatch)=>{
    dispatch(logout())
    localStorage.removeItem("user")
}