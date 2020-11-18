import React from 'react'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white mb-3">
      <section className='container px-0'>
        <h1 className='py-4'>Redux Essentials Example</h1>
        <div className='navbar-nav'>
          <Link to='/' className='nav-link'>Posts</Link>
        </div>
      </section>
    </nav>
  )
}
