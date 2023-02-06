import "./watch.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleDown, faArrowCircleLeft, faArrowDown19, faArrowLeft, faLeftRight } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from "react-router-dom"


const Watch = () => {

const location = useLocation()
  return (
    <div className="watch">
      <Link to={"/"}>
        <div className="back">
            <FontAwesomeIcon icon={faArrowLeft} />
            Home
        </div>
      </Link>
        <video className="video" autoPlay proggress controls muted src={location.state.trailer} />
    </div>
  )
}

export default Watch