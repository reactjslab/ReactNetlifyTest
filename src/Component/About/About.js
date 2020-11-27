import React from 'react'
import Header from './../Header/Header'
import Footermain from './../Footer/Footermain'
import Aboutme from'./Aboutme'
export default function About() {
    React.useEffect(()=>{
        document.title="About Me"
    },[])
    return (
        <>
        <Header/>
        <Aboutme/>
        <Footermain/>
        </>
    )
}