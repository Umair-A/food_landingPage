import React from 'react'
import logo from '../assets/Logo.svg';
import { navLinks } from '../constant';
import hamburger from '../assets/hamburger.svg';
import Button from './Button';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10 px-5 py-5'>
        <nav className='flex justify-between items-center w-full max-container lg:px-20'>
            <a href='/'>
                <img src={logo} alt='header-logo' width={182} height={68}/>
            </a>
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden text-lg'>
                {navLinks.map((links)=>(
                        <li key={links.href}>{links.label}</li>                  
                ))}
                <Button label='Booking Now' view='nav'/>
            </ul>
            
            <div className='hidden max-lg:block'>
              <img src= {hamburger} alt='hamburger' width={35} height={35} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar;