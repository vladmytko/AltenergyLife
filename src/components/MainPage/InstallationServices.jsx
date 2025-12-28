import React from 'react'
import { motion } from 'framer-motion'
import { ServiceItems } from './InstallationItems'
import { assets } from '../../assets/assets'
motion

const Services = () => {
  return (
    <section className="white" id='Installations'>
      <div
        style={{ backgroundColor: "#2d6048" }}
        className="flex flex-col justify-center items-center text-center pt-5 pb-5 sm:pt-10 sm:pb-10 mb-10 "
      >
        <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold">
          Home Energy Installations
        </h2>
        <div
          className="mt-4 h-1 w-1/2"
          style={{ backgroundColor: "#b7c87a" }}
        ></div>
      </div>
      <div className="container mx-auto px-1 ">
        {/* grid with 1 / 2 / 4 columns on different screens */}
        <div className="grid sm:gap-10 md:grid-cols-2 xl:grid-cols-4 ">
          {ServiceItems.map((item) => (
            <div
              key={item.id}
              className="bg-white  flex flex-col h-full min-h-[550px] min-w-[300px] "
            >
              {/* image + optional badge */}
              <div className="relative rounded-xl h-[30vh] md:h-72 overflow-hidden object-cover ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* text content */}
              <div className="p-6 flex flex-col flex-1 ">
                <h3 className="text-xl sm:text-3xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-900 text-baset sm:text-lg mb-4 space-y-2">
                  {item.description.split('. ').map((sentence, index) => (
                    <span key={index} className='flex'>
                      <img src={assets.tick} alt="tick" className='w-8 h-8 flex-shrink-0' />
                      <span>{sentence}.</span>
                    </span>
                  ))}
                </p>

                                  

                

                {/* button sticks to bottom using mt-auto on it or flex-1 on content */}
                {/* <button className="mt-auto inline-block bg-green-700 text-white px-8 py-2 rounded hover:bg-green-800 transition-colors duration-300">
                  DISCOVER
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services