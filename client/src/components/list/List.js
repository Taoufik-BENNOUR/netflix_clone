import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleDown, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import ListItem from "../listItem/ListItem"
import "./list.scss"
import { useRef, useState } from "react"

const List = ({List}) => {
  const [sliderNumber, setsliderNumber] = useState(0)
  const [isMoved, setisMoved] = useState(false)
  const list = useRef()
  const handleClick = (direction) =>{
    setisMoved(true)
    let distance = list.current.getBoundingClientRect().x - 50
    if(direction==="left" && sliderNumber>0){
      setsliderNumber(sliderNumber-1)
      list.current.style.transform = `translateX(${230+distance}px)`
    } if(direction==="right"&&sliderNumber<5){
      setsliderNumber(sliderNumber+1)
      list.current.style.transform = `translateX(${-230+distance}px)`
    }
  }
  return (
    <div className="list">
        <span className="listTitle">{List.title}</span>
        <div className="wrapper">
            <FontAwesomeIcon icon={faArrowLeft} className="slider left" onClick={()=>handleClick("left")} style={{display:!isMoved&&"none"}}/>
          <div className="container" ref={list}>
           {List.content&&List.content.map((el,i)=><ListItem key={i} index={i} content={el}/>)}
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="slider right" onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default List