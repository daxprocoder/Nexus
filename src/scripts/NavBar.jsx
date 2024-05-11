import "../styles/NavBar.css";
import javascriptext_icon from "../assets/javascriptext_icon.svg";
import cross_icon from "../assets/cross_icon.svg";

import React from 'react'

function NavBar() {
  return (
    <div>
      <ul className="navul">
        <li>
          <img src={javascriptext_icon} alt="javascriptext_icon" />
          <span style={{marginRight:"30px"}} title='Setup.js' >Setup.js</span>
          <img title='Close' className="crossclose" src={cross_icon} style={{cursor:"pointer",borderRadius:"100%",padding:"5px"}} alt="cross_icon" />
        </li>
      </ul>
    </div>
  )
}

export { NavBar }
