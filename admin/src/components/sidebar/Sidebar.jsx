import React, { useState } from 'react'
import "./sidebar.scss"
import sidebarData from '../../data/sidebar'
import {Link} from "react-router-dom";
const Sidebar = () => {
    // const [sidebarMenus, setsidebarMenus] = useState(sidebarData)
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            {sidebarData?.map((menu,i)=>(
            <div className="sidebarMenu">
            <h3 className="sidebarTitle" >{menu.menuTitle}</h3>
            {menu?.menuItems.map(item=>
                <ul className='sidebarItems' >
                        <Link className='link' to={item?.path}>
                            <li className='sidebarItem'>
                                <item.icon/>{item.title}
                            </li>
                        </Link>
                </ul>     
            )}
        </div>
        )
        )}
        </div>
    </div>
  )
}

export default Sidebar