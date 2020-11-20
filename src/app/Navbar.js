import React from 'react'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">Redux Essentials Example</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link className="nav-link" to="/" data-toggle="collapse" data-target=".navbar-collapse.show">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-link" to="#" data-toggle="collapse" data-target=".navbar-collapse.show">Post</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
