import React from 'react'
import womenImg1 from '../../assets/women/women1.jpg'
import womenImg2 from '../../assets/women/women2.jpg'
import womenImg3 from '../../assets/women/women3.jpg'
import womenImg4 from '../../assets/women/women4.jpg'
import womenImg5 from '../../assets/women/women5.png'
import womenImg6 from '../../assets/women/women6.jpg'
import { FaStar } from 'react-icons/fa6'

export const Products = () => {

    const productDatas = [
        {
            id : 1,
            img : womenImg1,
            title : "Women Ethnic",
            rating : 5.0,
            color : "white",
            aosDelay : "0"
        },
        {
            id : 2,
            img : womenImg2,
            title : "Women Western",
            rating : 4.5,
            color : "red",
            aosDelay : "200"
        },
        {
            id : 3,
            img : womenImg3,
            title : "Goggles",
            rating : 4.7,
            color : "brown",
            aosDelay : "400"
        },
        {
            id : 4,
            img : womenImg4,
            title : "Printed T-Shirt",
            rating : 4.4,
            color : "yellow",
            aosDelay : "600"
        },
        {
            id : 5,
            img : womenImg5,
            title : "Fashion T-Shirt",
            rating : 4.5,
            color : "pink",
            aosDelay : "800"
        },
       
    ];

  return (
    <div className='mt-12'>
        <div className='container'>
            {/* header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-primary' data-aos = "fade-up">Top Selling Products for you</p>
                <h1 className='text-3xl font-bold py-2'  data-aos = "fade-up">
                    Products</h1>
                <p className='text-xs text-gray-400'  data-aos = "fade-up">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolor repellendus dolores numquam odit natus
                </p>
            </div>
            {/* body section */}
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 place-items-center gap-5'>
                    {
                        productDatas.map((data)=>(
                            <div 
                                key={data.id}
                                className='space-y-2'
                                data-aos = "fade-up"
                                data-aos-delay = {data.aosDelay}
                            >
                                <img
                                    src={data.img}
                                    alt=''
                                    className='w-[170px] h-[200px] object-cover rounded-md'
                                />
                                <div>
                                    <h3 className='font-bold'>{data.title}</h3>
                                    <p className='text-sm text-gray-600'>{data.color}</p>
                                    <div className='flex items-center gap-2'>
                                        <FaStar className='text-yellow-400'/>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div 
                    className='flex flex-col items-center mt-10'
                    data-aos = "fade-up"
                >
                    <button
                    onClick={() => alert("view all product")}
                    className='bg-gradient-to-r from-primary to-secondary 
                        rounded-full flex items-center gap-1 px-6 py-[5px] 
                         text-white hover:scale-105 duration-300'
                    >view all product</button>
                </div>
            </div>
        </div>
    </div>
  )
}
