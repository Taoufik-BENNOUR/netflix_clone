import { createContext, useReducer } from "react"
import MovieReducer from "./MovieReducer"

const initialState = {
    movies:[],
    isLoading:false,
    error:false
}

export const MovieContext = createContext(initialState)

const MovieContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(MovieReducer,MovieContext)
  return (
    <MovieContext.Provider
     value={{movies:state.movies,
        isLoading:state.isLoading,
        error:state.error,
        dispatch
    }} >
        {children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider