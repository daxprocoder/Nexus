import "../styles/NavBar.css";

import React from 'react'

function NavBar(){
  return (
    <div>
        <ul className="navul">
            <li><a href="#home">Debug</a></li>
            <li><a href="#news">Optimize</a></li>
            <li><a href="#contact">Translate</a></li>
            <li><a href="#about">Documentation</a></li>
        </ul>
    </div>
  )
}

export {NavBar}
