import React from 'react';

const TestimonialsCard = ({name, text,rating, image}) => {
  return (
    <div className='flex flex-col items-center w-[500px] mt-10 bg-slate-200 rounded-2xl py-4 px-6'>
        <div>
            <img src={image} alt='testimonial-image'/>
        </div>
        <div>
            <p className='py-4 text-[#6a6a6a]'>{text}</p>
        </div>
        <div>
            <img src={rating} alt='rating'/>
        </div>
        <div>
            <h2 className='pt-4 text-3xl'>{name}</h2>
        </div>
    </div>
  )
}

export default TestimonialsCard;