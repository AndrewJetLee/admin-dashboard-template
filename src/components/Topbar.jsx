import React from 'react'
import "./topbar.scss"
import { NotificationsNone, Settings, Language } from '@mui/icons-material';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="left">
                <span className="logo">authorizedadmin</span>
            </div>
            <div className="right">
                <div className="navIcons">
                    <div className="IconContainer">
                        <NotificationsNone />
                        <span className="badge">
                            <span className="badgeCount">4</span>
                        </span>
                    </div>
                    <div className="IconContainer">
                        <Language />
                        <span className="badge">
                            <span className="badgeCount">4</span>
                        </span>
                    </div>
                    <div className="IconContainer">
                        <Settings />
                    </div>
                    <div className="profileImageContainer">
                        <img className="profileImage" src="images/user.svg" alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
