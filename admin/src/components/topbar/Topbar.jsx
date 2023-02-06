import React from 'react'
import "./topbar.scss"
import {Language, NotificationsNone, Settings} from "@material-ui/icons"
const Topbar = () => {
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
                <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" className='avatar'/>
            </div>
        </div>
    </div>
  )
}

export default Topbar