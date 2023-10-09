import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="WebHeader">
          <li>
            <NavLink
              to="/home"
              style={(data) => ({
                color: data.isActive ? 'red' : 'blue',
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={(data) => ({
                color: data.isActive ? 'red' : 'blue',
              })}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={(data) => ({
                color: data.isActive ? 'red' : 'blue',
              })}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
