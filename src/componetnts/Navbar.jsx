import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'> 
    <Link to='/'>
        <img className='w-[50px]' src={Logo} alt='Logo' />
    </Link>
    <Link to='/' className='text-blue-700 text-xl font-bold'>Movies</Link>
    <Link to='/watchlist' className='text-blue-700 text-xl font-bold'>Whatchlist</Link>
    </div>
  )
}

export default Navbar
