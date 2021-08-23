import React from 'react'
import './TopBar.css';

function TopBar({ title }) {
    return (
        <div className="TopBar">
            <span className="TopBarTitile">{title}</span>
        </div>
    )
}

export default TopBar
