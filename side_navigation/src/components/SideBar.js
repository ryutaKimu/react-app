
import React from 'react'
import { SideBarData } from './SideBarData'
import SideBarIcon from './SideBarIcon';

export default function SideBar() {
  return (
    <div className='Sidebar'>
        <SideBarIcon/>
        <ul className='SidebarList'>
        {SideBarData.map((sideBar,key)=>{
            return (
                <li key={key}
                    className='row'
                    id={window.location.pathname == sideBar.link ? "active" : ""}
                    onClick={()=>{
                        window.location.pathname = sideBar.link;
                    }}>
                    <div id='icon'>{sideBar.icon}</div>
                    <div id='title'>{sideBar.title}</div>
                </li>
            )
        })}
        </ul>
      
    </div>
  )
}
