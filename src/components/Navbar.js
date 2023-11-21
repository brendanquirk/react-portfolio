import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import Git from '../assets/whitegit.png'

const Navbar = (props) => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: '200px' }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li onClick={() => props.handlePageChange('home')}>Home</li>
        <li onClick={() => props.handlePageChange('about')}>About</li>
        <li onClick={() => props.handlePageChange('skills')}>Skills</li>
        <li onClick={() => props.handlePageChange('work')}>Work</li>
        <li>
          <a href="https://github.com/brendanquirk" target="_blank">
            <img className="w-6 h-6" src={Git} />
          </a>
        </li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <div
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center'
        }
      >
        <ul>
          <li
            onClick={() => {
              props.handlePageChange('home')
              handleClick()
            }}
            className="py-6 text-4xl"
          >
            Home
          </li>
          <li
            onClick={() => {
              props.handlePageChange('about')
              handleClick()
            }}
            className="py-6 text-4xl"
          >
            About
          </li>
          <li
            onClick={() => {
              props.handlePageChange('skills')
              handleClick()
            }}
            className="py-6 text-4xl"
          >
            Skills
          </li>
          <li
            onClick={() => {
              props.handlePageChange('work')
              handleClick()
            }}
            className="py-6 text-4xl"
          >
            Work
          </li>
          <li className="px-10">
            <a href="https://github.com/brendanquirk" target="_blank">
              <img className="w-10 h-10" src={Git} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
