import React from 'react';

const Contact = () => {
  return (
    <section className='flex px-28 flex-col w-full max-container align-center'>
        <div className='flex flex-col items-center align-center justify-center'>
            <h1 className='flex text-5xl font-monserrat pt-28'>Have Questions in Mind?</h1>
            <h1 className='text-5xl max-sm:text-3xl'>Let Us Help You</h1>   
        </div>
        <div className='flex flex-1 flex-wrap items-center justify-center gap-20  mb-10'>
            <input className='w-80 h-12 rounded-lg mt-10 pl-4' type="text" placeholder='yourmail@gmail.com' />
            <button className='rounded-full bg-[#FE9E0D] hover:bg-[#FE9E0D] mt-7 text-black items-start w-[100px] h-[42px]'>Submit</button>
        </div>
    </section>
  )
}

export default Contact;