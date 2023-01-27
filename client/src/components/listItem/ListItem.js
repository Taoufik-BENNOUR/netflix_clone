import { faAdd, faPlay, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import "./listItem.scss"

const ListItem = ({index}) => {
  const [isHovered, setisHovered] = useState(false);
  const trailer = "https://imdb-video.media-imdb.com/vi2959588889/1434659607842-pgv4ql-1596404706743.mp4?Expires=1674500739&Signature=dwrS7gCX4q7iYB74NO9wyFKN14vtTli-cNo9I32klEviLxatnFc35SVK~C6DsdOmjPKQKuAHCU8MtmWurlWJeB5KEy0-IP95NOsDQdf~E3bv0dChvopN9yU4vcPxwTaU9IJiQ6qAuDK31bmBoKUmn0sj9Ccqz6WdQVxXIZOuYgRLCHxZg94Qtukqnt5Rzp8wP-DKPTNARFTD7gB7wCHQoA2zzFBM1FT1NT1kg9IShNz12fEHa83T0zEmEfPL83ipFG1vQtaOzRw0cujOwbN9P6U1TJx5TRBwrWv6Jmd8qSFgCZiZRmX50uVwANE6JQevbPB6clrdUPHyPBW6PkgsPQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"

  return (
    <div className='listItem' style={{left:isHovered&&index*225-50+index*2.5}} onMouseEnter={()=>setisHovered(true)} onMouseLeave={()=>setisHovered(false)}>
      <img src="https://m.media-amazon.com/images/M/MV5BYjI3NDU0NzMtOTc5ZS00MTdiLWExZjAtMjk1MjcwOWQ0YTA0XkEyXkFqcGdeQW1pYnJ5YW50._V1_.jpg" alt=""/>
      {isHovered &&
      <>
    <video className="video" src={trailer} autoPlay={true} loop />
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
        <span>+16</span>
        <span>1999</span>
      </div>
      <div className="desc">
      WARNING in src\components\listItem\ListItem.js
      </div>
      <div className="genre">
        Action
      </div>
      </>
      }

    </div>
  )
}

export default ListItem