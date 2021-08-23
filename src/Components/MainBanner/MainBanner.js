import React from 'react'
import NewButton from '../Reusable/NewButton'
import './MainBanner.css'
import BannerBG from './../../bannerBG.png'

function MainBanner() {
    return (
        <div className="MainBannerContainer">
            <div className="MainBanner">
                <div className="BannerTitle">Energy Storage System Roadmap
                    For India 2019 - 2032
                </div>
                <div className="BannerSubTitle">
                    By India Smart Grid Forum (Published In October 2019)
                </div>
                <NewButton title="Read More" style={{ backgroundColor: '#f7931d', color: "white" }} />
            </div>
        </div>
    )
}

export default MainBanner
