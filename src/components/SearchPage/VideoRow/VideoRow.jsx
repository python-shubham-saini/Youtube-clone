import React from 'react'
import './VideoRow.css'
export const VideoRow = ({image , title, channel, views, timestamp, videoDescription }) => {
    return (
        <div className="videoRow">
            <img className="videorow__image" src={image} alt="video_thumbnail" />
            <div className="video__info">
                <div className="video__title">
                    <h4>{title}</h4>
                    <p>{channel} {views} views • {timestamp}</p>
                    <p>{videoDescription}</p>
                </div>
                
            </div>
        </div>
    )
}
