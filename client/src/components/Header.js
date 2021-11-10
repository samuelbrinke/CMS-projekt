import React from 'react'

function Header() {
  return (
    <header className="header-nav">
      <div className="line"></div>
      <div className="line2"></div>
      <div id="stars"></div>
      <div className="container position-relative" style={{'height': '100%'}}>
        <div id="stars-content">
          <div id="sun"></div>

        </div>

        <div className="mountain moun1"></div>
        <div className="mountain moun2"></div>
        <div className="mountain moun3"></div>
        <div id="neon">
          <span>Samuel</span><span>Brinkebäck</span>
        </div>
      </div>
      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

    </header>
  )
}

export default Header
