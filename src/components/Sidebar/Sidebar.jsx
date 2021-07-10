import React from 'react'
import "./Sidebar.css"
import { SidebarRow } from './SidebarRow/SidebarRow'
export const Sidebar = () => {
    return (
        <div className="sidebar-container">
           <SidebarRow/>
        </div>
    )
}
