import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <nav className='w-full items-center flex justify-between py-6'>
      <img src={logo} alt="logo" className='w-[124px] h-[32px]' />
      <div>
        <ul className='sm:flex hidden flex-start flex-1'>
          {
            navLinks.map( (link, index) => {
              return (
                <li key={link.id} className={`text-white list-none navLink
                font-poppins font-normal text-[16px]
                ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} cursor-pointer `}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              )
            } )
          }
        </ul>
      </div>

      <div className='sm:hidden flex flex-col items-end'>
        <img src={toggle? menu: close} alt="" className='h-[32px] w-[32px]'
        onClick={ () => setToggle(prev => !prev) } />
        {
          !toggle &&
          <div className='p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2
          min-w-[140px] rounded-xl sidebar'>
            <ul className='sm:hidden flex flex-col flex-1 items-center'>
              {
                navLinks.map( (link, index) => {
                  return (
                    <li key={link.id} className={`text-white list-none 
                    font-poppins font-normal text-[16px]
                    ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} cursor-pointer `}>
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  )
                } )
              }
        </ul>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar