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
                        Hello there i am candra devi i am from Bali Indonesia 
                        i am a nurse by profession and a Japanese Language Teacher 
                        based in bali .i teach japanese Language to Nurseing students at Hurry 
                        Japnese Language school and also i teach private classes to people who 
                        are interested in working in japan or just learning japanese language.
                        I have a Diploma in japanese Language and culture from JAPAN FOUNDATION JAKARTA
                        in Jakarata Indonesia and ASSOCIATION FOR OVERSEAS TECHNICAL CORPORATION AND SUSTAINIBLE 
                        PATERNERSHIP and  JAPAN INTERNATIONAL CORPORATION OF WELFARE SERVICE in Toyota City Aichi Perfecture Japan.
                        I have spent  four and half years in japan and i love japan ,its culture and language.
                        <br/>
                        Feel free contact me.
                        
                    </div>
                </div>
                </div>


            </div>
            <div className="col-md-1"></div>
            
        </div>
    )
}
