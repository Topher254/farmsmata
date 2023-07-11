import { List, X } from 'phosphor-react'
import React, { useState } from 'react'


const Navbar = () => {
    // const [nav, setNav] = useState[false]

    // const handleNav = () => {
    //     setNav(!nav)
    // }
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8 '>
      <h1 className="w-full text-3xl font-bold text-[#00df9a] ">FARM SMATA</h1>
    <ul className='flex justify-evenly '>
        <li className='P-4 ml-4 hover:cursor-pointer hover:text-green-300'>Home</li>
        <li className='P-4 ml-4 hover:cursor-pointer hover:text-green-300'>Company</li>
        <li className='P-4 ml-4  hover:cursor-pointer hover:text-green-300'>About</li>
        <li className='P-4 ml-4  hover:cursor-pointer hover:text-green-300'>Contact</li>
    </ul>
    <div className='hidden'>
        <List size={25}/>
    </div> 
    <div className='hidden  shadow-slate-100 fixed left-0 top-0 w-[50%] '>
        <ul className='pt-24 uppercase p-4'>
        <li className='P-4 ml-4 border-b border-gray-900 mb-6 hover:cursor-pointer hover:text-green-300'>Home</li>
        <li className='P-4 ml-4 border-b border-gray-900 mb-6 hover:cursor-pointer hover:text-green-300'>Company</li>
        <li className='P-4 ml-4 border-b border-gray-900 mb-6 hover:cursor-pointer hover:text-green-300'>About</li>
        <li className='P-4 ml-4 border-b border-gray-900 mb-6 hover:cursor-pointer hover:text-green-300'>Contact</li>
     
        </ul>
        {/* <X size={25}/> */}
    </div>
    </div>
  )
}

export default Navbar
