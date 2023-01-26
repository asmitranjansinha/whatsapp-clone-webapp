import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar />
            <div className="sidebarChat__info">
                <p className='sidebarChat__info__title'>Room Name</p>
                <p className='sidebarChat__info__subtitle'>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat