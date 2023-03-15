import { deleteMovieFailed, deleteMovieLoading, deleteMovieSuccess, getMoviesFailed, getMoviesLoading, getMoviesSuccess } from "./MovieActions"
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


export const deleteMovie = async(id,dispatch) =>{
    
    const config = {
        headers:{
            token : JSON.parse(localStorage.getItem("user")).token
        }
    }
    dispatch(deleteMovieLoading())
    try {
    const response = await axios.delete("/movie/"+id,config)
    dispatch(deleteMovieSuccess(id))
    } catch (error) {
    dispatch(deleteMovieFailed(error.response.data))    
    }
}