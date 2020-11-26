import React from 'react'
import Header from './../Header/Header'
import Footermain from './../Footer/Footermain'
import Err404 from './Err404'

export default function Error(props) {
    React.useEffect(()=>{
        document.title="Error 404 || Page does not exist"
    })
    
    return (
        <>
        <Header/>
        <Err404 />
        <Footermain/>
        </>
    )
}