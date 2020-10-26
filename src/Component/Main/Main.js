import React from 'react'
import './Main.css'
import Heart from './undraw_love_xfcv.svg'
 class Main extends React.Component {
    render() {
        return (
            <div className="main">

                <div className="heartP">
                <img className="heart" src={Heart} alt="heart"/>

                </div>
                <div className="face">

                </div>

                <div className="social">
                   <a target="blank" href="https://facebook.com"> <i className="fa fa-facebook" style={{fontSize:"34px"}}></i></a>
                   <a target="blank" href="https://instagram.com"><i className="fa fa-instagram" style={{fontSize:"34px"}}></i></a>
                   <a target="blank" href="https://linkedin.com"> <i className="fa fa-linkedin" style={{fontSize:"34px"}}></i></a>
                   <a target="blank" href="https://twitter.com"> <i className="fa fa-twitter" style={{fontSize:"34px"}}></i></a>
                </div>
                <div className="name">
                <h1 >Chandra devi</h1>
                </div>

                <h1 className="name">Chandra</h1>

            </div>
        )
    }
}
export default Main
