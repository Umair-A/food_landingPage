import React from 'react';
import homeBannerBackgroundImage from '../assets/home-banner-background.png';
import homeBannerImage from '../assets/home-banner-image.png';

const Home = () => {
  return (
    <section className='w-full max-lg:items-center flex xl:flex-row lg:flex-row max-sm:flex-col-reverse max-lg:flex-col-reverse max-xs:flex-col-reverse max-md:flex-col-reverse flex-col justify-center min-h-screen max-container px-20'>
        {/* <div className='flex relative max-container px-20'> */}
            <div className='flex w-[650px] right-0 max-md:w-[350px] max-sm:h-[500px] max-sm:w-[250px] flex-1 absolute top-0 flex-1 -z-10'>
                <img src={homeBannerBackgroundImage} alt='home-banner'/>
            </div>
            <div className='flex max-sm:pt-4 flex-1 relative flex-col justify-center items-start m-2'>
                <h1 className='text-[#4c4c4c] mt-32 max-lg:mt-16 max-w-[600px] max-lg:text-3xl text-6xl text-center'>Your Favourite Food Delievered Hot and Fresh</h1>
                <p className='text-[#6a6a6a] max-lg:text-lg max-w-[500px] text-center text-xl mt-7'>
                Healthy switcher chefs do all the prep work, like 
                peeding, chopping & marinating, so you can cool
                a fresh food.
                </p>  
                <button className='rounded-full bg-[#FE9E0D] hover:bg-[#FE9E0D] ml-7 mt-7 text-black items-start mr-6 max-sm:ml-28 w-[100px] h-[42px]'>Order Now</button>
            </div>
            <div className='flex lg:align-center relative flex-1 flex-col xl:min-h-screen justify-center object-contain xl:min-h-screen max-xl:pt-40 xl:mt-28 xl:mr-28'>
                <img 
                    src={homeBannerImage} 
                    alt='home-banner'
                    width={500}
                    height={500}
                    />
            </div>  
      {/* </div> */}
    </section>
  )
}

export default Home;