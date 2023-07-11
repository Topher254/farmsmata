import React from 'react'
import image1 from '../images/farm.avif'
const Analytic = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4' >
      <img className=' rounded-md shadow-md shadow-gray-800  w-[500px] mx-auto my-4' src={image1} alt='farmimage'></img>
      <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold'>SMART FARMING DASHBOARD</p>
        <h1 className='md:text-4xl font-sans sm:text-3xl text-2xl py-2'>Manage Your Farms Remotely</h1>
        <p className='leading-6 tracking-wider'>
        Transforming Agriculture:
         Smart farming solutions for optimized yields,
          efficient resource management, 
          and sustainable practices. 
          Embrace technology to drive productivity 
          and environmental 
        stewardship in the modern farming era
        </p>
        <button className='bg-black h-9 w-[200px] text-[#00df9a] rounded-full font-medium my-6 mx-auto px-6 items-center'>Get Started</button>
      </div>
    </div>
      
    </div>
  )
}

export default Analytic
