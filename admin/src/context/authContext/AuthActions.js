export const loginLoading = () =>({
    type:"LOGIN_LOADING"
})
export const loginSuccess = (user) =>({
    type:"LOGIN_SUCCESS",
    payload:user
})
export const loginFailed = (error) =>({
    type:"LOGIN_FAILED",
    payload:error
})

export const logout = () =>({
    type:"LOGOUT"
})
