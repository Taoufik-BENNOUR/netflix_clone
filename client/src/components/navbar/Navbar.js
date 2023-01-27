import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "./navbar.scss"
const Navbar = () => {
  const [scrolled, setscrolled] = useState(false)
  window.onscroll = () =>{
    setscrolled(window.pageYOffset===0?false:true);
    return()=>window.onscroll = null
  }
  return (
    <div className={scrolled?'navbar scrolled':"navbar"}>
        <div className='container'>
            <div className='left'>
            <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>My list</span>
            </div>
            <div className='right'>
              <FontAwesomeIcon icon={faSearch} className="faMenu" />
              <FontAwesomeIcon icon={faBell} className="faMenu" />
           <div className='profile'>
           <svg className='icon' width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.16108 10.0731C4.45387 9.2649 5.02785 8 6.1018 8H17.898C18.972 8 19.5459 9.2649 18.8388 10.0731L13.3169 16.3838C12.6197 17.1806 11.3801 17.1806 10.6829 16.3838L5.16108 10.0731ZM6.65274 9.5L11.8118 15.396C11.9114 15.5099 12.0885 15.5099 12.1881 15.396L17.3471 9.5H6.65274Z" fill="white"></path> </g></svg>
            <div className='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar