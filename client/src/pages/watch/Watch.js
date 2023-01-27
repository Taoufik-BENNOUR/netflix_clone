import "./watch.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleDown, faArrowCircleLeft, faArrowDown19, faArrowLeft, faLeftRight } from "@fortawesome/free-solid-svg-icons"
const video = "https://imdb-video.media-imdb.com/vi3368142105/1434659607842-pgv4ql-1673456609080.mp4?Expires=1674497772&Signature=t4~YALL0lSTl4skdYhptO6uMxcZ2nHtTTQjgERhTFrEOS8I8lt5veNe0XFwtIwStja5YY9iAv50QslvLOeQ8-479LixPqa-l-EzUeLAaMlarK~kEiSerP8VgDgYXxWdn4oSZwoR1~03tXSmfuUng9L0LztFrUtnuN9xU0X5KZm1ay6j5olmCskYPkGzHEloE3OfNuljAdadEiJqd4FY36ZDRCKB3-MSwo0KlwWUrEzVj-E3WcmFsKR3~8~CoGN~o5wJudjmm0UA-~7kCt3kP~4YXNHrghXC7U3CtO8YnUcxl7dRjuOD2bsRI8W4pWun3LuDEktVY0VOFAfN5A8tw7w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <FontAwesomeIcon icon={faArrowLeft} />
            Home
        </div>
        <video className="video" autoPlay proggress controls src={video} />
    </div>
  )
}

export default Watch