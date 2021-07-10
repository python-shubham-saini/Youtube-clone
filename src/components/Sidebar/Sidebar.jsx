import React from 'react'
import "./Sidebar.css"
import { SidebarRow } from './SidebarRow/SidebarRow'
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ExploreIcon from '@material-ui/icons/Explore';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AlbumIcon from '@material-ui/icons/Album';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import MusicVideoSharpIcon from '@material-ui/icons/MusicVideoSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';

export const Sidebar = () => {
    return (
        <div className="sidebar-container">
           <SidebarRow selected Icon = {HomeSharpIcon} title={"Home"}/>
           <SidebarRow Icon = {ExploreIcon} title={"Explore"}/>
           <SidebarRow Icon = {SubscriptionsIcon} title={"Subscriptions"}/>
           <SidebarRow Icon = {YouTubeIcon} title={"Originals"}/>
           <SidebarRow Icon = {AlbumIcon} title={"YouTube Music"}/>
           <hr/>
           <SidebarRow Icon = {VideoLibraryIcon} title={"Library"}/>
           <SidebarRow Icon = {HistoryIcon} title={"History"}/>
           <SidebarRow Icon = {MusicVideoSharpIcon} title={"Your videos"}/>
           <SidebarRow Icon = {WatchLaterSharpIcon} title={"Watch later"}/>
           <SidebarRow Icon = {ThumbUpAltSharpIcon} title={"Liked videos"}/>
           <SidebarRow Icon = {ExpandMoreSharpIcon} title={"Show more"}/>
           <hr/>
           <h4>SUBSCRIPTIONS</h4>
        </div>
    )
}
