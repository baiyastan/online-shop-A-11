import React from 'react'
import { Link } from 'react-router-dom'

import "./Header.css"

function Header() {
  return (
    <>
      <div className='top-header'>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <select>
          <option value="en">Eng</option>
          <option value="ru">Rus</option>
          <option value="ky">Kgz</option>
        </select>
      </div>
      <header className='header'>
        <nav className='main-nav container'>
          <div className='main-nav-bar'>
            <div className='logo'>
              <Link to="/"></Link>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className='main-nav-cart'>
            <div className='search'>
              <input type="text" />
              <img src="" alt="" />
            </div>
            <div className='nav-cart-icon'>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header