import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import './NewCard.css'

function NewCard() {
    return (
        <div className="NewCard">
            <div className="NewCardTitle">{'Title'}</div>
            <div className="NewCardBody">
                <div className="NewCardBodyItem">
                    <CheckIcon style={{color: '#f7941d', fontSize: '24px'}}/>
                    DistribuTech International
                </div>
                <div className="NewCardBodyItem">
                    <CheckIcon style={{color: '#f7941d', fontSize: '24px'}}/>
                    European Utility Week (Enlit Europe)
                </div>
                <div className="NewCardBodyItem">
                    <CheckIcon style={{color: '#f7941d', fontSize: '24px'}}/>
                    Distribution Utility Meet (DUM 2021) 
                </div>
                <div className="NewCardBodyItem">
                    <CheckIcon style={{color: '#f7941d', fontSize: '24px'}}/>
                    Nordic EV Summit 2021
                </div>
                <div className="NewCardBodyItem">
                    <CheckIcon style={{color: '#f7941d', fontSize: '24px'}}/>
                    Singapore International Energy Week 
                </div>
                <div className="NewCardBodyItem">
                    <CheckIcon style={{color: '#f7941d', fontSize: '24px'}}/>
                    THE EXPERT FORUM FOR CHANGING MOBILITY
                </div>
                <div className="NewCardBodyItem">
                    <CheckIcon style={{color: '#f7941d', fontSize: '24px'}}/>
                    Smart Grid Foundation Course (3 Days)
                </div>
                <div className="NewCardBodyItem">
                    <CheckIcon style={{color: '#f7941d', fontSize: '24px'}}/>
                    Smart Grid Certificate Course (10 Weeks)
                </div>
                <div className="NewCardBodyItem">
                    <CheckIcon style={{color: '#f7941d', fontSize: '24px'}}/>
                    Smart Grid Bootcamp (1 Day)
                </div>
                <div className="NewCardBodyItem">
                    <CheckIcon style={{color: '#f7941d', fontSize: '24px'}}/>
                    Cyber Security Workshop (3 Days)
                </div>
            </div>
            <hr className="NewCardBottomLine"/>
        </div>
    )
}

export default NewCard
