import React, { useContext } from 'react'
import "./topbar.scss"
import {Language, NotificationsNone, Settings} from "@material-ui/icons"
import { AuthContext } from '../../context/authContext/AuthContext'
import { logoutCall } from '../../context/authContext/apiCalls'

const Topbar = () => {
    const {dispatch} = useContext(AuthContext)
    const handleClick=(e)=>{
        e.preventDefault()
          logoutCall(dispatch)
      }
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Dashbord</span>
            </div>
            <div className="topRight">
                <div className="iconContainer">
                    <NotificationsNone />
                    <span className="IconBagde">2</span>
                </div>
                <div className="iconContainer">
                    <Language />
                    <span className="IconBagde">2</span>
                </div>
                <div className="iconContainer">
                    <Settings />
                </div>
            <div className="profile">
                 <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" className='avatar'/>
                <div className='options'>
                    <span>Setting</span>
                    <span onClick={handleClick}>Logout</span>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar