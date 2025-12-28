import React, { useEffect, useState } from 'react'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { scrollToHash } from '../utils/scrollToHash'

export const NavBar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    if(showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body
    };
  },[showMobileMenu])

  return (
    <div style={{backgroundColor: "#2d6048"}} className='absolute top-0 left-0 w-full z-10 backdrop-blur-md'>
      <div className='flex items-center justify-between w-full px-4 py-4 md:px-20 lg:px-32'>
        <Link to="/">
          <img className='h-11 cursor-pointer' src={assets.logo} alt='Home' />
        </Link>

        <div className='flex-1 flex justify-center md:mr-36'>
          <ul className='hidden md:flex gap-7 text-xl text-white'>
            <Link to='/' className='cursor-pointer hover:text-gray-400'>Home</Link>
            <Link to='/about' className='cursor-pointer hover:text-gray-400'>About</Link>
            <Link to='/strategy-services' onClick={() => scrollToHash("#Strategy")} className='cursor-pointer hover:text-gray-400'>Strategy</Link>
            <Link to='/#Installations' onClick={() => scrollToHash("#Installations")} className='cursor-pointer hover:text-gray-400'>Installations</Link>
            <Link to='/#Contact' onClick={() => scrollToHash("#Contact")} className='cursor-pointer hover:text-gray-400'>Contact</Link>
          </ul>
        </div>

        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className='md:hidden w-7 cursor-pointer'
        />
      </div>



    {/* ========================== Mobile Menu =============================*/}
    <div
     className={
      `md:hidden fixed inset-0 h-[70vh] z-20
       overflow-hidden backdrop-blur-2xl
       transform transition-transform duration-300 ease-out ${showMobileMenu ? 'translate-y-0' : '-translate-y-full'}
      `}
       style={{ backgroundColor: "#1c4061" }}
    >
          <div className='flex justify-end p-6 cursor-pointer'>
            <img 
              onClick={()=> setShowMobileMenu(false)} 
              src={assets.cross_icon} 
              className="w-6 hover:scale-110 transition-transform duration-300" 
              alt="" 
            />

          </div>
          <ul className='flex flex-col items-center gap-5 px-5 text-4xl font-semibold text-white'>
            <Link onClick={() => setShowMobileMenu(false)} to='/' className='px-4 py-2 rounded-full inline-block hover:text-yellow-400 transition-colors duration-300'>Home</Link>
            <Link onClick={() => setShowMobileMenu(false)} to='/about' className='px-4 py-2 rounded-full inline-block hover:text-yellow-400 transition-colors duration-300'>About</Link>
            <Link onClick={() => setShowMobileMenu(false)} to='/strategy-services' className='px-4 py-2 rounded-full inline-block hover:text-yellow-400 transition-colors duration-300'>Strategy</Link>
            <Link onClick={() => setShowMobileMenu(false)} to='/#Installations' className='px-4 py-2 rounded-full inline-block hover:text-yellow-400 transition-colors duration-300'>Installations</Link>
            <Link onClick={() => setShowMobileMenu(false)} to='/#Contact' className='px-4 py-2 rounded-full inline-block hover:text-yellow-400 transition-colors duration-300'>Contact Us</Link>
          </ul>
        </div>
    </div>
  )
}
