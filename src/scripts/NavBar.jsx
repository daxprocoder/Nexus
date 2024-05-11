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
          <span style={{marginRight:"30px"}} >Setup.js</span>
          <img src={cross_icon} style={{cursor:"pointer"}} alt="cross_icon" />
        </li>
      </ul>
    </div>
  )
}

export { NavBar }
