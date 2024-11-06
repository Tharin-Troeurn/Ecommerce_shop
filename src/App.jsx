
import React, { useState } from 'react'
import { Hero } from './components/hero/Hero'
import { Navbar } from './components/navbar/Navbar'
import { Products } from './components/products/Products'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { TopProduct } from './components/topproduct/TopProduct'
import { Banner } from './components/banner/Banner'
import { Subscribe } from './components/subscribe/Subscribe'
import { Testimonials } from './components/testimonials/Testimonials'
import { Footer } from './components/footer/Footer'
import { PopUp } from './components/popup/PopUp'


function App() {
  const [orderPopup,setOrderPopup] = useState(false);
  const handleOrderPopup = ()=>{
    setOrderPopup(!orderPopup);
  }

  React.useEffect(()=>{
    Aos.init({
      offset : 100,
      duration : 800,
      easing : "ease-in-sine",
      delay : 100,
    });
    Aos.refresh();
  }, []);

  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProduct handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      {/* <Subscribe/> */}
      <Testimonials/>
      <Footer/>
      <PopUp 
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
      />
    </div>
    </>
  )
}

export default App
