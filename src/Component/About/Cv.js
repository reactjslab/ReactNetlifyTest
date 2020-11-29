import React from 'react'
import './CV.css'
export default function Cv() {
    return (
        <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-10 Cv'>
                <h1 className="d-flex flex-column align-items-center m-3">Work Experience</h1>
            <div className="workexprence p-3 m-3">
                    <div className="cvline"><i className="iv fas fa-user-alt "></i> 
                    <div className="workTitle">Japanese Language Teacher</div>
                    </div>
                    <div className="cvline"><i className="iv far fa-calendar-alt"></i>
                    <div className="workHistory">2019-Current</div></div>
                    <div className="cvline"><i className="iv fas fa-map-marker-alt"></i>
                    <div className="worklocation">Bali indonesia</div></div>
                    
                    <div className="cvline"><i className="iv far fa-hospital"></i>
                    <div className="workCompany">Hurry Japanese Language School</div></div>
                    <div className="cvline"><i className="iv fas fa-laptop-house"></i>
                    <div className="workdetail">Currently working as a japanese language teacher
                    and an accountant</div> </div>
                </div>
            <div className="border-top m-3"></div>
            <div className="workexprence p-3 m-3">
                    <div className="cvline"><i className="iv fas fa-user-alt "></i> 
                    <div className="workTitle">Nurse</div>
                    </div>
                    <div className="cvline"><i className="iv far fa-calendar-alt"></i>
                    <div className="workHistory">2015-2019</div></div>
                    <div className="cvline"><i className="iv fas fa-map-marker-alt"></i>
                    <div className="worklocation">Fukouka Japan</div></div>
                    
                    <div className="cvline"><i className="iv far fa-hospital"></i>
                    <div className="workCompany">Special Nursing Home for Elderly , Joushoen</div></div>
                    
                </div>
            <div className="border-top m-3"></div>
            <div className="workexprence p-3 m-3">
                    <div className="cvline"><i className="iv fas fa-user-alt "></i> 
                    <div className="workTitle">Nurse</div>
                    </div>
                    <div className="cvline"><i className="iv far fa-calendar-alt"></i>
                    <div className="workHistory">2010-2014</div></div>
                    <div className="cvline"><i className="iv fas fa-map-marker-alt"></i>
                    <div className="worklocation">Bali indonesia</div></div>
                    
                    <div className="cvline"><i className="iv far fa-hospital"></i>
                    <div className="workCompany">Darma Usada Clinic</div></div>
                   
                </div>
           
            </div>
            <div className='col-md-1'></div>
            
        </div>
    )
}
