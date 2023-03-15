

const MovieReducer = (state,action) => {
    switch (action.type) {
        case "GET_MOVIES_LOADING":
            return {...state,isLoading:false,error:true}

        case "GET_MOVIES_SUCCESS":
            return {movies:action.payload,isLoading:false,error:false}

        case "GET_MOVIES_FAILED":
            
            return {movies:[],isLoading:false,error:action.payload}
            

        case  "DELETE_MOVIE_LOADING":
                return {movies:[],isLoading:true,error:false}

        case "DELETE_MOVIE_SUCCESS":
            return {movies:state.movies.filter((movie)=>movie._id !== action.payload),isLoading:false,error:false}
        
        case "DELETE_MOVIE_FAILED":
            return {...state,isLoading:false,error:true}

            
        default:
            return state;
    }
}

export default MovieReducer;