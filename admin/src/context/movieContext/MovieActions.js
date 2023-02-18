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

