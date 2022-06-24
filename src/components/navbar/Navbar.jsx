import React from 'react';
import "./Navbar.css";
import {NotificationsNone, Language} from '@mui/icons-material';

function navbar() {
  return (
    <div className='navbar'>
        <div className='navbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>Dashboard</span>
            </div>
            <div className='topRight'>
                <div className='navbarIconContainer'>
                    <NotificationsNone />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='navbarIconContainer'>
                    <Language />
                    <span className='topIconBadge'>2</span>
                </div>
                <img src='https://yt3.ggpht.com/ytc/AKedOLSVz9yrg6EnmvKGOoc9jxbFjOCQS0Q-_6l_-7-YFw=s900-c-k-c0x00ffffff-no-rj' alt='' className='topAvatar'></img>
            </div>
        </div>
    </div>
  )
}

export default navbar