import React from 'react'
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutLineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        <div className="header">
           
            <div className="header_icons">
                <div className="header_icon header_icon--active home">
                <HomeIcon />
                 <p>Home</p>
                </div>

                <div className="header_icon">
                <FlashOnIcon />
                 <p>Trending</p>
                </div>
                <div className ="header_icon">
                <LiveTvIcon />
                <p>LiveTv</p>
                </div>
                 
                <div className ="header_icon">
                <VideoLibraryIcon />
                <p>Collections</p>
                </div>
                
                <div className ="header_icon">
                <SearchIcon />
                <p>Search</p>
                </div>
                <div className="header_icon">
                <PersonOutLineIcon />
                <p>Account</p>
                </div>
                
               

                
            </div>
            <img src="/img/1.png" alt=""/>
            
        </div>
    )
}

export default Header
