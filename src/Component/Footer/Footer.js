import React from 'react'

import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="footermain">
            <div className="red"></div>
            <div className="green "></div>
            <div className="yellow"></div>
            <div className="purple"></div>
            
            <div className="lets">
                <h1 className="px-sm-3">lets learn japanese</h1>
            </div>
            <div className="address">
                <ul className="px-sm-3">
                    <li>ubad indonesia </li>
                    <li>bali</li>
                </ul>
            </div>
            <div className="ct">
                <ul className="px-sm-3">
                    <li><a href="skype:fogy_guy?chat">Start chat</a> </li>
                    <li>phone</li>
                </ul>
            </div>
            <div className="cc">
               <h1 className="px-sm-3">{ "\u{00A9}"} 2020</h1>
            </div>
            <div className="credit">
                ubai
            </div>
            </div>
        )
    }
}
export default Footer
