import React from 'react'
import "./VideoCard.css"
import { Avatar } from '@material-ui/core';

export const VideoCard = ({image , title, channel, views, timestamp, channelImage }) => {
    return (
        <div className="video__card">
            <img className = "video__image" src={image} alt=""/>
            <div className="video__info"> 
                <Avatar className="videoCard__avatar" alt="Profile" src={channelImage} />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>
        </div>
    )
}
