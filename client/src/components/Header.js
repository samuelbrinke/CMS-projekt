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
        <a href="/">
          <div id="logo-text"><span>Samuel</span><span>Brinkebäck</span></div>
        </a>
        <button className="menu-btn d-flex align-items-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <i className="bi bi-list"></i>
          <span className="" style={{'fontSize': '1rem', 'marginLeft': '5px' }}>Menu</span>
        </button>

      </div>
    </header>
  )
}

export default Header
