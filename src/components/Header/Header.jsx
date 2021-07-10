import React, {useState} from 'react'
import'./Header.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import { Avatar } from '@material-ui/core';
export const Header = () => {
    const [inputValue,   setInputValue] = useState("")
    console.log(inputValue)
    return (
        <div className="main-container">    
            <div className="left-container">
                <MenuIcon className="yt-menu"/>
                <Link to="/">
                    <img className="header__logo" alt ="Youtube-icon" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" />
                </Link>
            </div>
            <div className="mid-container">
  
                <input onChange={((e)=> setInputValue(e.target.value))} value={inputValue} className="search-box" placeholder="Search" type="text" />
                <Link to={`/search/${inputValue}`}>
                    <SearchSharpIcon className="search-icon"/>
                </Link>
            </div>

            <div className="right-container">
                <VideoCallSharpIcon/>
                <AppsSharpIcon/>
                <NotificationsActiveSharpIcon/>
                <Avatar alt="Profile" src="https://cdn.dribbble.com/users/2199928/screenshots/11532918/shot-cropped-1590177932366.png?compress=1&resize=400x300" />
            </div>
        </div>
    )
}
