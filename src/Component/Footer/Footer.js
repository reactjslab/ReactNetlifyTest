import React from 'react'

import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="footermain ">
            <div className="red"></div>
            <div className="green "></div>
            <div className="yellow"></div>
            <div className="purple"></div>
            
            <div className="lets ">
                <p className="py-3">lets learn japanese</p>
            </div>
            <div className="address">
                <ul>
                    <li>ubad indonesia </li>
                    <li>bali</li>
                </ul>
            </div>
            <div className="ct">
                <ul>
                    <li><a href="skype:fogy_guy?chat">Start chat</a> </li>
                    <li>phone</li>
                </ul>
            </div>
            <div className="cc">
               <p>{ "\u{00A9}"} 2020</p>
            </div>
            
            <div className="credit">
                ubai
            </div>
            </div>
        )
    }
}
export default Footer
