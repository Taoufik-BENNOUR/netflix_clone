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
            <img src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg' />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>My list</span>
            </div>
            <div className='right'>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z" fill="currentColor"></path></svg>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.07092C16.3922 4.55624 18.9998 7.4736 18.9998 11V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11C4.99978 7.47345 7.6076 4.55599 11 4.07086V2L13 2V4.07092ZM16.9998 15.1287V11C16.9998 8.23858 14.7612 6 11.9998 6C9.23836 6 6.99978 8.23858 6.99978 11V15.1287C8.64041 15.0437 10.3089 15 11.9998 15C13.6907 15 15.3591 15.0437 16.9998 15.1287ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z" fill="currentColor"></path></svg>
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