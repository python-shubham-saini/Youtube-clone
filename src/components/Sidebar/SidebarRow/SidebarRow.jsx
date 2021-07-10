import React from 'react'
import './SidebarRow.css'

export const SidebarRow = ({selected, Icon, title}) => {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className={`row-icon ${selected && "selected"}`}/>
            <div className="row-name">{title}</div>
        </div>
    )
}
