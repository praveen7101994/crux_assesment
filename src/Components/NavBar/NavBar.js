import React from 'react'
import './NavBar.css'
import HomeIcon from '@material-ui/icons/Home';

function NavBar() {
    let NavItems = [
        { title: "ISGF" },
        { title: "Resource Center" },
        { title: "ISGF Initiative" },
        { title: "media" },
        { title: "membership" },
        { title: "contributions" },
    ]
    return (
        <div className="NavBar">
            <HomeIcon style={{ color: 'white' }} />
            {
                NavItems.map(item => (
                    <div className="NavItem">{item.title}</div>
                ))
            }
            <HomeIcon style={{ color: 'white', marginLeft: 'auto' }} />
        </div>
    )
}

export default NavBar
