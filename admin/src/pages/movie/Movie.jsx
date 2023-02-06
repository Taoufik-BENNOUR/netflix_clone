import "./movie.scss"
import {Link} from "react-router-dom"

const Movie = () => {
  return (
    <div className='movie'>
        <div className="movieTitleContainer">
            <h1 className="movieTitle">Movie</h1>
            <Link to="/newMovie">
             <button className="movieTitleButton">Create</button>
            </Link>
        </div>
    </div>
  )
}

export default Movie