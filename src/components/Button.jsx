import React from 'react';

const Button = ({label, view}) => {
  return (
    <button className={view=='nav'?'rounded-full bg-white hover:bg-slate-100 items-center justify-center text-black px-6 py-3 w-[158px] h-[52px]':'rounded-full bg-white hover:bg-slate-100 items-center align-center justify-center text-black w-[158px] h-[52px]'}>{label}</button>
  )
}

export default Button;