import React from 'react'
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import { ChannelRow } from './ChannelRow/ChannelRow';
import { VideoRow } from './VideoRow/VideoRow';
export const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon/>
                <h4>FILTERS</h4>
            </div>
            <hr/>
            <ChannelRow
                image = {"https://cdn.dribbble.com/users/2199928/screenshots/11532918/shot-cropped-1590177932366.png?compress=1&resize=400x300"}
                channel={"Creative World"}
                subs={"659k"}
                noOfVideos={"123"}
                description={"this is programming channel. where you can find programming videos"}
                verified={""}
            />
            <hr/>
            <h3>Latest From {"Creative World"}</h3>
            <VideoRow image={"https://www-media.egger-cdn.com/9024523436062/8997670551582/ImageswebsiteproductsErgoBoardGDA18250x140px201710v2.jpg"}
                title ="World's Bigges firebattle "
                channel="Creative World"
                views="654k"  
                timestamp="3 days ago" 
                videoDescription="this is videos description "
                />
            <VideoRow image={"https://www-media.egger-cdn.com/9024523436062/8997670551582/ImageswebsiteproductsErgoBoardGDA18250x140px201710v2.jpg"}
                title ="World's Bigges firebattle "
                channel="Creative World"
                views="654k"  
                timestamp="3 days ago" 
                videoDescription="this is videos description "
                />

        </div>
    )
}
