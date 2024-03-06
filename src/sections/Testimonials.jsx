import React from 'react';
import { testimonial } from '../constant';
import TestimonialsCard from '../components/TestimonialsCard';

const Testimonials = () => {
  return (
    <section className='flex px-28 flex-col w-full max-container align-center'>
        <div className='flex flex-col items-center align-center justify-center'>
            <h3 className='flex text-xl font-monserrat text-[#FE9E0D]'>Testimonials</h3>
            <h1 className='text-5xl max-sm:text-3xl py-5'>What they are saying</h1>
            <p className='text-[#6a6a6a]'>
                <span>Lorem ipsum dolor sit amet consectetur. Non tincidunt</span><br />
                <span>magna non et elit. Dolor  turpis molestie dui</span><br />
                <span>magnis facilisis at fringilla quam. </span><br />
            </p>    
        </div>
        <div className='flex flex-1 flex-wrap items-center justify-center gap-20'>
            {testimonial.map((testimonials)=>(
                <TestimonialsCard key={testimonials.name} {...testimonials} />
            ))}
        </div>
    </section>
  )
}

export default Testimonials;