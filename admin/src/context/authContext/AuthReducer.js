

const AuthReducer = (state,action) => {
    switch (action.type) {
        case "LOGIN_LOADING":
            return {user:null,isLoading:true,error:false}

        case "LOGIN_SUCCESS":
            return {user:action.payload,isLoading:false,error:false}
            
        case "LOGIN_FAILED":
            return {user:null,isLoading:false,error:action.payload}
            
        case "LOGOUT":
            return {user:null,isLoading:false,error:false}
        default:
            return state;
    }
}

export default AuthReducer;