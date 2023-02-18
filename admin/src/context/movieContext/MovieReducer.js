

const MovieReducer = (state,action) => {
    switch (action.type) {
        case "GET_MOVIES_LOADING":
            return {movies:[],isLoading:true,error:false}

        case "GET_MOVIES_SUCCESS":
            return {movies:action.payload,isLoading:false,error:false}
            
        case "GET_MOVIES_FAILED":
            return {user:[],isLoading:false,error:action.payload}
            
        default:
            return state;
    }
}

export default MovieReducer;