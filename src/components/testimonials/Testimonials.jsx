import React from 'react'
import Slider from 'react-slick';

export const Testimonials = () => {

    const testimonialsData = [
        {
            id : 1,
            name : "Victor",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, suscipit, exercitationem unde sint ad repellat enim, error illo eaque aut tempore quas odit.",
            img : "https://i.pinimg.com/564x/a3/78/2e/a3782eeffec0212a3d1836e589503fdf.jpg"
        },
        {
            id : 2,
            name : "Satya Nadella",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, suscipit, exercitationem unde sint ad repellat enim, error illo eaque aut tempore quas odit.",
            img : "https://i.pinimg.com/736x/b0/23/d2/b023d2cdd456bd47e569fb54b7924d31.jpg"
        },
        {
            id : 3,
            name : "Sok Dara",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, suscipit, exercitationem unde sint ad repellat enim, error illo eaque aut tempore quas odit.",
            img : "https://i.pinimg.com/564x/65/fc/c3/65fcc3719d8b630db09b903f115f7b39.jpg"
        },
        {
            id : 4,
            name : "Heng Siya",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, suscipit, exercitationem unde sint ad repellat enim, error illo eaque aut tempore quas odit.",
            img : "https://i.pinimg.com/564x/73/68/65/7368650a01d25dfcfff46a40fdeee29b.jpg"
        },
        {
            id : 5,
            name : "Sachin Tendulkar",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, suscipit, exercitationem unde sint ad repellat enim, error illo eaque aut tempore quas odit.",
            img : "https://tse4.mm.bing.net/th?id=OIP.1WwdM2sBlqf3NsNum81IugHaEK&pid=Api&P=0&h=220"
        },
    ];

    const settings = {
        dots : true,
        arrows : false,
        infinite: true,
        speed: 500,
        // slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }

  return (
    <div className='py-10'>
        <div className='container'>
            {/* header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p className='text-primary' data-aos = "fade-up">What our customer are saying?</p>
                <h1 className='text-3xl font-bold py-2'  data-aos = "fade-up">
                    Testimonial</h1>
                <p className='text-xs text-gray-400'  data-aos = "fade-up">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolor repellendus dolores numquam odit natus
                </p>
            </div>
            {/* Testimonial card */}
            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {
                        testimonialsData.map((data)=>(
                            <div>
                                <div
                                    key={data.id}
                                    className='flex flex-col gap-5 shadow-lg py-8 px-6 mx-4 
                                    rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                                >
                                    <div className=''>
                                        <img 
                                            src={data.img} 
                                            alt="" 
                                            className='rounded-full w-[60px] h-[60px] object-cover'
                                        />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <p className='text-sm text-gray-400'>{data.text}</p>
                                        <h1 className='text-xl font-bold dark:text-white'>{data.name}</h1>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}
