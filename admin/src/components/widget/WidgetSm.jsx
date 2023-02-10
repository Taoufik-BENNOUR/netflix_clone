import { Visibility } from "@material-ui/icons"
import { useEffect, useState } from "react"
import axios from "axios"
import token from "../../data/token.json"
const WidgetSm = ({title}) => {
  const [newUser, setnewUser] = useState([])

  useEffect(() => {
    const getUsers = async()=>{
      try {
        const response = await axios.get("/user?new=true",{headers:{token:token.token}})
        setnewUser(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [])
  
  return (
    <>
    <span className="widgetTitle">{title}</span>
    {newUser.map(el=>    <ul className="widgetList">
        <li className="widgetListItems">
          <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          <div className="widgetUserContainer">
            <span className="widgetUsername">{el.username}</span>
            <span className="widgetUserTitle">Engineer</span>
          </div>
          <button className="wdigetButton">
            <Visibility/>
            Display
          </button>
        </li>
      </ul>)}
    </>
  )
}

export default WidgetSm