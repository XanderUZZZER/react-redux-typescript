import React from 'react'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white mb-3">
    //   <section className='container px-0'>
    //     <h1 className='py-4'>Redux Essentials Example</h1>
    //     <div className='navbar-nav'>
    //       <Link to='/' className='nav-link'>Posts</Link>
    //     </div>
    //   </section>
    // </nav>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">Redux Essentials Example</a>
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
