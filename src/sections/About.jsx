import React from 'react';
import aboutBackgroundImage from '../assets/about-background.png';
import aboutImage from '../assets/about-background-image.png';

const About = () => {
  return (
    <section className='flex px-20 max-lg:flex-col w-full max-container align-center'>
        <div className='flex flex-1 absolute -z-10 -ml-20 max-sm:hidden'>
            <img 
                src={aboutBackgroundImage} 
                alt='about-background'
                width={180}
                height={180}
            />
        </div>
        <div className='flex flex-1 relative max-sm:items-center max-sm:w-[250px] max-xs:w-[400px] object-contain flex-col xl:mt-20 xl:ml-18 max-xl:mt-20 max-md:mt-20 max-md:ml-20 max-xl:ml-20'>
            <img 
                src={aboutImage} 
                alt='about-image'
                width={400}
                height={400}
            />
        </div>
        <div className='flex flex-1 max-lg:right-4 relative flex-col max-sm:items-center justify-center items-start'>
            <h3 className='flex text-xl font-monserrat text-[#FE9E0D]'>About</h3>
            <h1 className='text-6xl max-md:text-4xl max-sm:text-3xl'>Food Is An Important Part Of A Balanced Diet</h1>
            <p className='text-[#6a6a6a] '>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                magna non et elit. Dolor  turpis molestie dui
                magnis facilisis at fringilla quam.</p>
            <p className='text-[#6a6a6a] '>Non tincidunt magna non et elit. Dolor turpis molestie 
                dui magnis facilisis at fringilla quam.</p>
            <button className='rounded-full bg-[#FE9E0D] hover:bg-[#FE9E0D] ml-7 mt-7 text-black items-start mr-6 w-[100px] h-[42px]'>Learn More</button>
        </div>
        
        
    </section>
  )
}

export default About;