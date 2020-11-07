import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css'
const Brand=() =>{

  return (
    <div className="navbar navbar-custom d-flex flex-column flex-md-row align-items-center">
      <h6 className="my-0 mr-md-auto navBrand">
        <Link to="/" className="nounder">chandra marazzi</Link></h6>
      <nav className="my-2 my-md-0 mr-md-3">
      <NavLink className="navel p-3 text-dark active" exact to ="/" >Home</NavLink>
      <NavLink className="navel p-3 text-dark" to="/contact">Contact</NavLink>
      <NavLink className="navel p-3 text-dark" to="/about">About</NavLink>
       </nav>
     
    </div>
  )
}

export default Brand;