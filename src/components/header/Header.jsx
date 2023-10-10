import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <header className="header">
      <nav className="nav_container">
        <a href="index.html" className="nav___logo">Smith</a>
        <div className="nav_menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li> I
          </ul>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li> I
          </ul>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav_icon"></i>
                Skills
              </a>
            </li> I
          </ul>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav_icon"></i>Services
              </a>
            </li> I
          </ul>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav_icon"></i>
                Portfolio</a>
            </li> I
          </ul>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav_icon"></i>
                Contact</a>
            </li> I
          </ul>
          <i className='uil uil-times nav__close'></i>
        </div>
        <div className="nav__toggle">
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
