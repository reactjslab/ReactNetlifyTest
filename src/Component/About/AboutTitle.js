import React from 'react'
import './AboutTitle.css'
//<img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
export default function AboutTitle() {
    return (
        <div className='row mb-3'>
            <div className='col-md-1'></div>
            <div className='col-md-10 Cv'>
                <div className="d-flex flex-column align-items-center m-3">
                    <h1 className="aboutmetitle">ni made candra devi</h1>
                    <p className="descT d-flex flex-column align-items-center m-3"> medahan kemenuh sukawati gianyar bali indonesia</p>
                </div>
            </div>
            <div className='col-md-1'></div>
        </div>
    )
}
