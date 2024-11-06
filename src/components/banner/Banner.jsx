import React from 'react'
import WomenBannerImg from '../../assets/women/women6.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { FaMoneyCheckDollar } from "react-icons/fa6";

export const Banner = () => {
  return (
    <div className='min-h-[550px] py-12 sm:py-0 flex justify-center items-center'>
        <div className='container '>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-6 items-center'>
                {/* image section */}
                <div data-aos="zoom-in">
                    <img 
                        src={WomenBannerImg}
                        alt=""
                        className='min-w-[150px] h-[350px] w-full object-cover
                        drop-shadow-5xl mx-auto'
                    />
                </div>
                {/* text detail section */}
                <div className='text-center sm:text-left'>
                    <h1 data-aos="fade-up" className='text-2xl sm:text-4xl font-bold'>Winter Sale upto 50% Off</h1>
                    <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Odio autem officia id, quidem vitae voluptatem? Voluptatem
                         neque soluta natus eaque!
                    </p>
                    <div className='flex flex-col gap-4 mt-3'>
                        <div className='flex items-center gap-5' data-aos="fade-up">
                            <GrSecure
                                className='text-xl h-12 w-12 shadow-md p-4 rounded-full
                                bg-violet-100 dark:bg-violet-500 dark:text-white'
                            />
                            <p>Quality Products</p>
                        </div>
                        <div className='flex items-center gap-5' data-aos="fade-up">
                            <IoFastFood
                                className=' h-12 w-12 shadow-md p-4 rounded-full
                                bg-orange-100 dark:bg-orange-500 dark:text-white'
                            />
                            <p>Fast Delivery</p>
                        </div>
                        <div className='flex items-center gap-5' data-aos="fade-up">
                            <FaMoneyCheckDollar
                                className='text-xl h-12 w-12 shadow-md p-4 rounded-full
                                bg-green-100 dark:bg-green-500 dark:text-white'
                            />
                            <p>Easy Payment Method</p>
                        </div>
                        <div className='flex items-center gap-5' data-aos="fade-up">
                            <IoFastFood
                                className=' h-12 w-12 shadow-md p-4 rounded-full
                                bg-teal-100 dark:bg-teal-500 dark:text-white'
                            />
                            <p>Get Offer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
