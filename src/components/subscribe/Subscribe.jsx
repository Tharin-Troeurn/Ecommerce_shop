import React from 'react'

export const Subscribe = () => {
  return (
    <div
        className='h-[100px] container bg-gradient-to-l from-primary to-secondary
        dark:bg-gray-800 '
    >
        <div className=''>
            <h1 data-aos = "fade-up" className='text-2xl text-white font-semibold'>Get Notified About New Products</h1>
            <input 
                data-aos = "fade-up"
                type="text" 
                placeholder='Enter Your Email'
                className='w-full p-2'
            />
        </div>
    </div>
  )
}
