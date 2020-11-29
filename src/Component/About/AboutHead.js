import React from 'react'
import './AboutHead.css'
export default function AboutHead() {
    return (
        <div className="row mb-5 mt-3">
             <div className="col-md-1"></div>
            <div className="col-md-10 Cv">


                <div className="row">
               <div className="fullimg col-md d-flex flex-column align-items-center">
                   <img className="profileimg " src={process.env.PUBLIC_URL +'./Profile.jpg'} alt="in japan"/>
                </div>
                <div className="descdetail col-md">
                    <div className="nametitle d-flex align-items-center flex-column ">ni made candra devi</div>
                    <div className="bodydesc mb-3">
                       <p>Hello there i am candra devi. i am from Bali Indonesia.
                        I am a nurse by profession and a Japanese Language Teacher based in Bali. 
                        I teach the Japanese Language to a nursing student at Hurry 
                        Japanese Language school and also I teach private classes to people who are 
                        interested in working in japan or just learning the Japanese language.</p>
                        <p>I have a Diploma in Japanese Language and culture from JAPAN FOUNDATION JAKARTA in Jakarta 
                        Indonesia and ASSOCIATION FOR OVERSEAS TECHNICAL CORPORATION AND SUSTAINABLE PARTNERSHIP and  
                        JAPAN INTERNATIONAL CORPORATION OF WELFARE SERVICE in Toyota City Aichi Prefecture Japan.</p>
                        <p>I have spent four and a half years in Japan and I love Japan, its culture, and language.</p>
                        <br/>
                        <p> Feel free contact me.</p>
                        
                    </div>
                </div>
                </div>


            </div>
            <div className="col-md-1"></div>
            
        </div>
    )
}
