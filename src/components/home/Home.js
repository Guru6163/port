import React from 'react'
import "./Home.css"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Body from '../body/Body'

function home() {
    return (
        <div className="home" >
            <Header/>
            <Body/>
            <Footer/>
            
        </div>
    )
}

export default home
