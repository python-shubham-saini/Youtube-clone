import React from 'react'
import './ChannelRow.css'
import { Avatar } from '@material-ui/core';

export const ChannelRow = ({image, channel,subs,noOfVideos,description,verified}) => {
    return (
        <div className="channelRow">
                <Avatar className="channel__avatar" alt="Profile" src={image} />
                <div className="channel__info">
                    <h4>{channel}</h4>
                    <p>{subs} Subscribers • {noOfVideos} videos</p>
                    <p>{description}</p>
                </div>
        </div>
    )
}
