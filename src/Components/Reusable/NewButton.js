import React from 'react'
import './NewButton.css'

function NewButton({ style, title }) {
    return (
        <button style={style} className="NewButton">
            {title}
        </button>
    )
}

export default NewButton
