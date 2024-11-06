import React from 'react'
import ShirtImg1 from '../../assets/shirt/shirt-1.png'
import ShirtImg2 from '../../assets/shirt/shirt-2.png'
import ShirtImg3 from '../../assets/shirt/shirt-3.png'
import { FaStar } from 'react-icons/fa6'

export const TopProduct = ({handleOrderPopup}) => {

    const topProductDatas = [
        {
            id: 1,
            img: ShirtImg1,
            title: 'Casual Wear',
            description: "amet consectetur adipisicing elit. Quod blanditiis velit quae recusandae eius officiis minima possimus ipsum adipisci error Lorem ipsum dolor sit."
        },
        {
            id: 2,
            img: ShirtImg2,
            title: 'Printed Shirt',
            description: "amet consectetur adipisicing elit. Quod blanditiis velit quae recusandae eius officiis minima possimus ipsum adipisci error Lorem ipsum dolor sit."
        },
        {
            id: 3,
            img: ShirtImg3,
            title: 'Women Shirt',
            description: "amet consectetur adipisicing elit. Quod blanditiis velit quae recusandae eius officiis minima possimus ipsum adipisci error Lorem ipsum dolor sit."
        }
    ]

    return (
        <div>
            <div className='container mt-12'>
                {/* header section */}
                <div className='text-center mb-20 '>
                    <p className='text-primary' data-aos="fade-up">Top Relate Products for you</p>
                    <h1 className='text-3xl font-bold py-2' data-aos="fade-up">
                        Best Products
                    </h1>
                    <p className='text-xs text-gray-400' data-aos="fade-up">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dolor repellendus dolores numquam odit natus
                    </p>
                </div>
                {/* body section */}
                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-20 md:gap-5 place-items-center'>
                    {
                        topProductDatas.map((data) => (
                            <div
                                data-aos = "zoom-in"
                                className='rounded-2xl bg-white dark:bg-gray-800
                               hover:bg-black/80 dark:hover:bg-primary
                               hover:text-white relative shadow-xl group max-w-[300px] '
                            >
                                {/* image section */}
                                <div className='h-[100px]'>
                                    <img
                                        src={data.img}
                                        alt=""
                                        className='max-w-[140px] block mx-auto transform -translate-y-20
                                    group-hover:scale-105 duration-300 drop-shadow-md '
                                    />
                                </div>
                                {/* detail section */}
                                <div className='text-center p-4'>
                                    <div className='w-full flex items-center justify-center gap-1'>
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                    </div>
                                    <h1 className='text-xl font-bold dark:text-gray-50'>{data.title}</h1>
                                    <p className='text-sm text-gray-500 dark:text-gray-300'>{data.description}</p>
                                    <button
                                        onClick={handleOrderPopup}
                                        className='bg-gradient-to-r from-primary to-secondary 
                                            rounded-full flex items-center gap-1 px-6 py-[5px]  text-white
                                            hover:scale-105 duration-300 mx-auto mt-2'
                                    >Order</button>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}
