import React from 'react'
import './TitleBar.css'

function TitleBar(props) {
    return (
        <div className="TitleBarContainer">
            <div className="TitleBarSpan">Title</div>
            <hr className="TitleBarSmall" style={{ borderColor: props.borderColor }} />
            <hr className="TitleBar" />
        </div>
    )
}

export default TitleBar
