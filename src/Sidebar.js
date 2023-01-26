import { ChatRounded, DonutLarge, Filter, GroupRounded, MoreVert, Search } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import "./Sidebar.css"
import SidebarChat from './SidebarChat'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__header">

        <div className="sidebar__headerLeft"><Avatar src="https://avatars.githubusercontent.com/u/101510670?v=4" /></div>

        <div className="sidebar__headerRight">
          <IconButton><GroupRounded style={{ color: grey[400] }} /></IconButton>
          <IconButton><DonutLarge style={{ color: grey[400] }} /> </IconButton>
          <IconButton><ChatRounded style={{ color: grey[400] }} /></IconButton>
          <IconButton><MoreVert style={{ color: grey[400] }} /></IconButton>
        </div>

      </div>

      <div className="sidebar__search">

        <div className="sidebar__searchContainer">

          <IconButton><Search style={{ color: grey[400] }} /></IconButton>
          <input type="text" placeholder='Search or start new chat' />

        </div>

        <IconButton><Filter style={{ color: grey[400], fontSize: 18 }} /></IconButton>

      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>

    </div>
  )
}

export default Sidebar
