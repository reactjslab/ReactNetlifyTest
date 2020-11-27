import React from 'react'
import './Err404.css'
import E404 from './undraw_page_not_found_su7k.svg'
export default function err404() {
    return (
        <div className="errormain">
            <div className="errorimg">
                <img className="err404svg py-3 mb-3 col-12" src={E404} alt="404 page not found"/>
                <h1 className="errmsg">page not found </h1>   
            </div>            
        </div>
    )
}
