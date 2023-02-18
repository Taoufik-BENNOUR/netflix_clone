import { getMoviesFailed, getMoviesLoading, getMoviesSuccess } from "./MovieActions"
import axios from 'axios'

export const getMovies = async(dispatch) =>{
    
    const config = {
        headers:{
            token : JSON.parse(localStorage.getItem("user")).token
        }
    }
    dispatch(getMoviesLoading())
    try {
    const response = await axios.get("/movie",config)
    dispatch(getMoviesSuccess(response.data))
    } catch (error) {
    dispatch(getMoviesFailed(error.response.data))    
    }
}