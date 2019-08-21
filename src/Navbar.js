/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => (
  <nav className="navbar" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <h1 className="title">
          Zalada
        </h1>
      </a>
      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
    </div>
    <div className="navbar-end">
      <a className="navbar-item">Home</a>
    </div>
  </nav>
)

export default Navbar