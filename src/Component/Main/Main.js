import React from 'react'
import {Link} from 'react-router-dom'
import './Main.css'
import Header from './../Header/Header'
import Footermain from './../Footer/Footermain'
import Chandra from './chandra.jpg'
 class Main extends React.Component {
     componentDidMount(){
         document.title="Chandra Devi | Home Page"
     }
    render() {
        return (
            <>
            <Header/>
            <div className="main">

                <div className="heartP">
                    <div className="heartTitle">
                    <h1 className="iam">Hi i am candra</h1>
                    <p className="iamp">i am a japanese language teacher based in Bali Indonesia </p> 

                    <Link to="/about" style={{float:"right"}}  className="btn btn-light">read more</Link>
                    </div>
                </div>
                <div className="face">
                    <div className="cover">
                    <img className="imgg" loading="lazy" src={Chandra} alt="chandra"/>
                    </div>
                </div>

                <div className="social">
                   <a target="blank" href="https://www.facebook.com/candra.theywe/"> <i className="fa fa-facebook" style={{fontSize:"34px"}}></i></a>
                   <a target="blank" href="https://www.instagram.com/marazzicandra/"><i className="fa fa-instagram" style={{fontSize:"34px"}}></i></a>
                   <a target="blank"  href="https://www.twitter.com/marazzicandra/"><i className="fa fa-twitter" style={{fontSize:"34px"}}></i></a>
                   <a href="skype:chandra.marazzi?chat"><i className="fa fa-skype" style={{fontSize:"34px"}}></i></a>
                   <a href="mailto:candramarazzi@gmail.com"><i style={{fontSize:"34px"}} className="fa fa-envelope-o"></i></a>
                   </div>
                <div className="name">
                <h1 >Chandra devi</h1>
                </div>
            </div>
            <Footermain/>

            </>
        )
    }
}
export default Main
