import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] text-white mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 px-4">
          <h1 className="text-white md:text-4xl font-bold py-2 sm:text-3xl text-2xl">
            Want tricks and tips to improve your farming?
          </h1>
          <p>Sign Up for our Newsletter and Stay up to date</p>
        </div>
        <div className="my-4">
        <div className="flex md:flex-row sm:flex-col">
            <input type="email" className="p-3 flex w-full  rounded-md text-black  mx-4 my-6" placeholder="Enter your Email"/>
            <button className='bg-[#00df9a] h-9 w-[200px]  text-white rounded-full font-medium my-6 mx-4 px-6 items-center'>Notify Me</button>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Newsletter;
