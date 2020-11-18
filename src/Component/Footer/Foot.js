import React from 'react'

export default function Foot() {
    return (
        <div className="container">
        <footer className="my-md-5  pt-4">
        <div className="row">
          <div className="col-6  col-md">
          
            <h4><i className="text-muted fas fa-torii-gate" style={{fontSize:"18px"}}></i>  Lets learn japanese</h4>
            <small className="d-block mb-3 text-muted">© 2019-2021</small>
          </div>
          <div className="col-6 col-md">
          <h4><i className="text-muted fas fa-map-marker-alt" style={{fontSize:"18px"}}></i>   Location</h4>
            <ul className="list-unstyled text-small">
              <li className="text-muted">Medahan, Kemenuh</li>
              <li className="text-muted">Sukawati, Gianyar</li>
              <li className="text-muted">Bali , Indonesia</li>              
            </ul>
          </div>
          <div className="col-6 col-md">
           <h4><i className="text-muted fas fa-phone-volume" style={{fontSize:"18px"}}></i>   Contact</h4>
            <ul className="list-unstyled text-small">
              <li className="text-muted"><a href="tel:087-8600-60-500">087-8600-60-500</a></li>
              <li className="text-muted">candra.marazzi@gmail.com</li>
              <li><a className="text-muted" href="skype:chandra.marazzi?chat">Skype</a></li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h4><i className="text-muted fas fa-vihara" style={{fontSize:"18px"}}></i>  About</h4>
            <ul className="list-unstyled text-small">
              <li className="text-muted">Teaching</li>
              <li className="text-muted ">Accounting </li>
              <li className="text-muted ">Nursing</li>
            </ul>
          </div>
        </div>
      </footer>
      </div>
    )
}
