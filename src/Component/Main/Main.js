import React from 'react'
import './Main.css'
import Heart from './undraw_love_xfcv.svg'
 class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <img className="heart" src={Heart} alt="heart"/>
                <h1 className="name">Chandra devi</h1>
            </div>
        )
    }
}
export default Main