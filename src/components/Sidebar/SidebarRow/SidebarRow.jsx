import React from 'react'
import './SidebarRow.css'
import HomeSharpIcon from '@material-ui/icons/HomeSharp';

export const SidebarRow = () => {
    return (
        <div className="sidebarRow">
            <HomeSharpIcon className="row-icon" fontSize="medium"/>
            <div className="row-name">Home</div>
        </div>
    )
}
