import React from 'react'
import heroImg1 from '../../assets/heroImg/girl-shopping.png'
import heroImg2 from '../../assets/heroImg/two-girls-shopping.png'
import heroImg3 from '../../assets/heroImg/special-promotion.png'
import Slider from 'react-slick'


export const Hero = ({handleOrderPopup}) => {
  const imageLists = [
    {
      id: 1,
      img: heroImg1,
      title: "Upto 50% off on all Men's Wear",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam reprehenderit nesciunt sapiente iure molestias eveniet dignissimos animi quod quam sed tenetur nam exercitationem consequatur tempore id, placeat esse? Error."
    },
    {
      id: 2,
      img: heroImg2,
      title: "Upto 30% off on all Women's Wear",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam reprehenderit nesciunt sapiente iure molestias eveniet dignissimos animi quod quam sed tenetur nam exercitationem consequatur tempore id, placeat esse? Error."
    },
    {
      id: 3,
      img: heroImg3,
      title: "70% off on all Products Sale",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam reprehenderit nesciunt sapiente iure molestias eveniet dignissimos animi quod quam sed tenetur nam exercitationem consequatur tempore id, placeat esse? Error."
    }
  ];

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true

  };


  return (
    <div className=' relative overflow-hidden min-h-[550px]
      sm:min-h-[500px] bg-gray-100 dark:bg-gray-950 dark:text-white
      flex justify-center items-center '
    >
      {/* backgorund pattern */}
      <div className='h-[500px] w-[700px] bg-primary/40 
        absolute  -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
      </div>
      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {
            imageLists.map((item) => (
              <div key={item.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-2 px-10'>
                  {/* text content section */}
                  <div className='flex flex-col justify-center text-center sm:text-left
                    order-2 sm:order-1 relative z-10 mt-5 sm:mt-0'
                  >
                    <h1 
                      className='lg:text-6xl sm:text-5xl text-4xl font-bold'
                      data-aos = "zoom-out"
                      data-aos-duration = "500"
                      data-aos-once = "true"
                    >
                      {item.title}
                    </h1>
                    <p 
                      className='pt-[10px]'
                      data-aos = "fade-up"
                      data-aos-duration = "500"
                      data-aos-delay = "100"
                    >{item.description}</p>
                    <div
                      data-aos = "fade-up"
                      data-aos-duration = "500"
                      data-aos-delay = "300"
                    >
                      <button
                        onClick={handleOrderPopup}
                        className='bg-gradient-to-r from-primary to-secondary 
                          rounded-full text-white px-3 py-1 hover:scale-105 mt-3'
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                  {/* image section */}
                  <div className='order-1 sm:order-2'>
                    <div className='relative z-10'>
                      <img
                        src={item.img}
                        alt=""
                        className='w-[350px] h-[300px] 
                      sm:scale-125 mx-auto object-contain'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </Slider>
      </div>
    </div>
  )
}
