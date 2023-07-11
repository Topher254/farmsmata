import React from 'react'


const Body = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>Growing with Smart Systems</p>
        <h1 className='md:text-5xl sm:text-4xl text-4xl font-bold md:py-2'>Grow with IoT</h1>
        <p className='md:text-3xl items-center py-2 sm:text-2xl font-bold'>Flexible, fast Automated Systems</p>
        <p className='md:2xl text-xl sm:text-xl font-bold text-gray-400 '>Monitor your farm smartly to increase productivity and minimize losses</p>
        <button className='bg-[#00df9a] h-9 w-[200px] text-black rounded-full font-medium my-6 mx-auto px-6 items-center'>Get Started</button>
      </div>
    </div>
  )
}

export default Body
