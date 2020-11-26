import React from 'react'
import Header from './../Header/Header'
import Footermain from './../Footer/Footermain'
import Contactform from './Contactform'
export default function Contact() {
    React.useEffect(()=>{
        document.title="Contact Me"
    },[])
    return (
        <>
        <Header/>
        <Contactform/>
        <Footermain/>
        </>
    )
}
