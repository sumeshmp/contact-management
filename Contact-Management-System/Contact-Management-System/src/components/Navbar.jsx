import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <div className='container'>
            <Link to={'/'} className='navbar-brand'>
                 <i className='fa-solid fa-address-card  text-primary me-2'/>
                 Contact <span className='text-primary'>Manager</span>
            </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar