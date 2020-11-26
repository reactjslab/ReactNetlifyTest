import React from 'react'
import MapBoxDiv from './MapBoxDiv'
import Cv from './Cv'
import Education from './Education'
import AboutTitle from './AboutTitle'
import AboutHead from './AboutHead'
import './About.css'

const Aboutme=()=>{
    return(
        <div className="container">
            <AboutHead/>
            <AboutTitle/>
            <Cv/>
            <Education/>
            <MapBoxDiv/>
        </div>
    )
}
export default Aboutme