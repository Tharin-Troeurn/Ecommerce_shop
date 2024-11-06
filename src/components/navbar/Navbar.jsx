import React from 'react'
import logo from '../../assets/logo_img-copy.png';
import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import { DarkMode } from './DarkMode';


export const Navbar = ({handleOrderPopup}) => {

  const menus = [
    {
      id: 1,
      name: "Home",
      link: "/#"
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services"
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#"
    },
    {
      id: 4,
      name: "Men Wear",
      link: "/#"
    },
    {
      id: 5,
      name: "Electronics",
      link: "/#"
    },
  ];
  const dropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#"
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#"
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#"
    }
  ];

  return (
    <>
      
      <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white relative z-40'>
        {/* upper navbar */}
        <div className='bg-primary/40'>
          <div className='container flex justify-between items-center'>

            <a href="" className='flex gap-2 font-bold text-[20px] items-center'>
              <img src={logo} alt="" className='w-[70px]' />
              My Shop
            </a>

            {/* search bar and order button */}
            <div className='flex gap-1 items-center'>
              <div className='group relative lg:block md:block  hidden'>
                <input
                  type="text"
                  placeholder='search'
                  className='lg:w-[250px] sm:w-[200px] rounded-full border 
                border-gray-300 px-4 py-1  focus:outline-none 
                focus:border-orange-400 dark:bg-gray-800 dark:border-gray-500'
                />
                <IoMdSearch
                  className='text-gray-500 absolute top-1/2 -translate-y-1/2 right-3'
                />
              </div>
              {/* order button */}
              <div className=' ms-3'>
                <button
                  onClick={() => handleOrderPopup()}
                  className='bg-gradient-to-r from-primary to-secondary 
                rounded-full flex items-center gap-1 px-6 py-[6px]  text-white '
                >
                  <FaCartShopping />
                </button>
              </div>

              {/* dark mode */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
        {/* lower navbar */}
        <div className='flex justify-center' data-aos="zoom-in">
          <ul className='gap-4 sm:flex block  items-center '>
            {
              menus.map((menu) => (
                <li key={menu.id} className=''>
                  <a
                    href={menu.link}
                    className='inline-block px-4 py-3 hover:text-primary duration-200'
                  >
                    {menu.name}
                  </a>
                </li>
              ))
             
            }
            {/* dropdown menu */}
            <li className='group relative cursor-pointer'>
              <a href="#" className='flex items-center pb-4 sm:p-0'
              >
                Trending Product
                <span>
                  <FaCaretDown
                    className='transition-all duration-200 group-hover:rotate-180'
                  />
                </span>
              </a>
              <div className='absolute z-[9999] hidden group-hover:block w-[150px]
              rounded-md bg-white p-2  text-black shadow-lg dark:bg-gray-900 dark:text-white'>
                <ul>
                    {
                      dropdownLinks.map((dropdownLink)=>(
                        <li key={dropdownLink.id} className='py-2 hover:text-primary duration-200'>
                          <a href={dropdownLink.link}>
                            {dropdownLink.name}
                          </a>
                        </li>
                      ))
                    }
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>


    </>
  )
}
