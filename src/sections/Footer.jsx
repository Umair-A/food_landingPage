import React from 'react'
import icons from '../assets/Icons.png';
import { footer } from '../constant';
import logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer className='max-container'>
        <div  className='flex px-28 py-20 justify-between gap-20 flex-start max-lg:flex-col w-full align-center bg-slate-100 flex-wrap'>
            <div className='flex flex-col flex-wrap'>
                <h1 className='flex text-5xl text-[#FE9E0D]'>FOODIE</h1>
                <div>
                <img src={icons} />
                </div>
            </div>
            <div className='flex flex-1 justify-between flex-wrap items-center justify-center gap-20'>
                {footer.map((footer)=>(
                    <div>
                        <p key={footer.title}>{footer.title}</p>
                        <ul>
                            {footer.links.map((links)=>(
                                <li key={links.label}>{links.label}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer;