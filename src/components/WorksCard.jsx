import React from 'react';

const WorksCard = ({thumbnail, title, text}) => {
  return (
    <div className='flex-1 bg-slate-200 p-4 items-center align-center w-full rounded-[20px] shadow-3xl py-16'>
        <div><img  src={thumbnail} alt='thumbnail'/></div>
        <div><h2 className='py-5 text-3xl'>{title}</h2></div>
        <div><p className='text-[#6a6a6a]'>{text}</p></div>
    </div>
  )
}

export default WorksCard;