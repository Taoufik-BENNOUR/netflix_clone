export const getMoviesLoading = () =>({
    type:"GET_MOVIES_LOADING"
})
export const getMoviesSuccess = (movies) =>({
    type:"GET_MOVIES_SUCCESS",
    payload:movies
})
export const getMoviesFailed = (error) =>({
    type:"GET_MOVIES_FAILED",
    payload:error
})

export const deleteMovieLoading = () =>({
    type:"DELETE_MOVIE_LOADING"
})
export const deleteMovieSuccess = (id) =>({
    type:"DELETE_MOVIE_SUCCESS",
    payload:id
})
export const deleteMovieFailed = (error) =>({
    type:"DELETE_MOVIE_FAILED",
    payload:error
})


