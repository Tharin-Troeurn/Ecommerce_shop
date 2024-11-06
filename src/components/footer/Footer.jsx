import React from 'react'
import FooterBanner from '../../assets/footer-banner.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

export const Footer = () => {

    const FooterImg = {
        backgroundImage : `url(${FooterBanner})`,
        backgroundPosition : "bottom",
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover",
        height : "100%",
        width : "100%"
    }

    const footerLinks=[
        {
            title : "Home",
            link : "/"
        },
        {
            title : "About",
            link : "/about"
        },
        {
            title : "Contact",
            link : "/contact"
        },
        {
            title : "Blog",
            link : "/blog"
        },
    ]

  return (
    <div
        style={FooterImg}
        className='text-white mt-10'
    >
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-44 pt-5'>
                {/* company detail */}
                <div className='py-8 px-4'>
                    <h1 className='sm:text-2xl text-xl font-bold sm:text-left
                    text-justify flex items-center gap-3 '
                    >Shopsy</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis,
                        incidunt id possimus iste architecto reiciendis unde voluptas delectus? Asperiores.
                    </p>
                </div>
                {/* footer link */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 '>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-2xl text-xl font-bold sm:text-left
                                text-justify'>
                                Importance Link
                            </h1>
                            <ul>
                                {
                                    footerLinks.map((data)=>(
                                        <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-200'>
                                            <a href={data.link}>{data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-2xl text-xl font-bold sm:text-left
                                text-justify'>
                                Link
                            </h1>
                            <ul>
                                {
                                    footerLinks.map((data)=>(
                                        <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-200'>
                                            <a href={data.link}>{data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* social links */}
                    <div className='py-10 px-4'>
                        <div className='flex gap-3'>
                            <a href="#">
                                <FaInstagram className='text-2xl'/>
                            </a>
                            <a href="#">
                                <FaFacebook className='text-2xl'/>
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-2xl'/>
                            </a>
                        </div>
                        <div className='mt-5'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow/>
                                <p>Noida, Uttar Pradesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt/>
                                <p>+885 287394712</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )

}
