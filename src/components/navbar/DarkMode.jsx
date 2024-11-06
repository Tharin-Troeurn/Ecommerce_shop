import React, { useState } from 'react'
import light_mode from '../../assets/light_mode-button.png'
import dark_mode from '../../assets/dark_mode-button.png'


export const DarkMode = () => {

    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;// geting html element
    //console.log(element)
    React.useEffect(()=>{
        if(theme == "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        }else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    }, [theme])
    
  return (
    <>
        <div className='relative'>
            <img 
                src={light_mode} 
                alt="" 
                onClick={()=>setTheme(theme == "light" ? "dark":"light")}
                className={`w-[100px] h-[43px] cursor-pointer
                drop-shadow[1px_1px_1px_rgba(0,0,0,0.2)]
                absolute -top-[2.6px] ${theme == "dark" ? "opacity-0" : "opacity-100"}`}
                
            />

            <img 
                src={dark_mode} 
                alt="" 
                onClick={()=>setTheme(theme == "light" ? "dark":"light")}
                className='w-[100px] h-[42px] cursor-pointer
                drop-shadow[1px_1px_1px_rgba(0,0,0,0.2)]'
                
            />
        </div>
        
        
    </>
  )
}
 