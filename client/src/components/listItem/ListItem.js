import { faAdd, faPlay, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./listItem.scss"

const ListItem = ({index,content}) => {
  const [isHovered, setisHovered] = useState(false);
  const [movie, setmovie] = useState(null)
  const navigate = useNavigate();
  
  // function handleClick() {
  //   navigate("/watch",{state:movie})
  // }
  useEffect(() => {
    const fetchMovie = async()=>{
      try {
        const response = await axios.get(`/movie/${content}`)
        setmovie(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie()
}, [content])
  return (
    // <span onClick={handleClick}>
    <Link to={"/watch"} state={movie}>
    <div className='listItem' style={{left:isHovered&&index*225-50+index*2.5}} onMouseEnter={()=>setisHovered(true)} onMouseLeave={()=>setisHovered(false)}>
      <img src={movie?.image} alt=""/>
      {isHovered &&
      <>
    <video className="video" src={movie?.trailer} autoPlay={true} loop muted/>

      <div className="itemInfo">
        <div className="icons">
          <FontAwesomeIcon className="icon" icon={faAdd} />
          <FontAwesomeIcon className="icon" icon={faPlay} />
          <FontAwesomeIcon className="icon" icon={faThumbsUp}  />
          <FontAwesomeIcon className="icon" icon={faThumbsDown}  />
        </div>
      </div>
      <div className="itemInfoTop">
        <span>1h 14min</span>
        <span>+{movie?.limit}</span>
        <span>{movie?.year}</span>
      </div>
      <div className="desc">
      {movie?.description}
      </div>
      <div className="genre">
        {movie?.genre}
      </div>
      </>
      }

    </div>
      </Link>
    // </span>
  )
}

export default ListItem