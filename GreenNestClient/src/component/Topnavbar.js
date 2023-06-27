import React from 'react'

export default function Topnavbar() {
  return (
    <div className="top-bar"> 
    <div className="contacts">
    <span className="submenu">  <i className="fa fa-phone" aria-hidden="true"></i>0468-526971  </span>|
    <span className="submenu">  <i className="fa fa-envelope" aria-hidden="true"></i>customer@gmail.com </span>
   
    </div>
    <div className="other-menu">
    <span className="submenu">About</span> |<span className="submenu">Why us</span>  |<span className="submenu">Contact</span> 
    </div>
    
</div>
  )
}
