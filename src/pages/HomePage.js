import HomePageFooter from 'components/Footers/HomePageFooter'
import Header from 'components/Headers/Header'
import Navi from 'components/Navbars/Navi'
import Dashboard from 'layouts/Dashboard'
import React from 'react'

export default function HomePage() {
    return (
    <>
        <Navi/>
        <div className="wrapper">
            <Header/>
            <div className="main">
                <Dashboard/>
            </div>
        </div>
        <HomePageFooter/>
    </>
    )
}
