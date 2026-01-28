import React from 'react'
import { motion } from 'framer-motion'
import { ServiceItems } from './InstallationItems'
import { assets } from '../../assets/assets'
import { Link } from 'react-router'
motion

const Services = () => {
  return (
    <section className="white" id='Installations'>
      <div
        style={{ backgroundColor: "#2d6048" }}
        className="flex flex-col justify-center items-center text-center pt-5 pb-5 sm:pt-10 sm:pb-10 mb-10 "
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium">
          Home Energy Installations
        </h2>
        <div
          className="mt-4 h-1 w-1/2"
          style={{ backgroundColor: "#b7c87a" }}
        ></div>
      </div>
      <div className="container mx-auto px-1 ">
        {/* grid with 1 / 2 / 4 columns on different screens */}
        <div className="grid sm:gap-12 md:grid-cols-2 xl:grid-cols-4 ">
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
                <h3 className="text-2xl sm:text-4xl font-medium mb-3">{item.title}</h3>
                <div className="text-gray-900 text-lg sm:text-xl mb-5 space-y-2 font-light">
                  {(Array.isArray(item.description)
                    ? item.description
                    : String(item.description)
                        .split(". ")
                        .filter(Boolean)
                  ).map((bullet, index) => (
                    <div key={index} className="flex gap-2">
                      <img src={assets.tick} alt="tick" className="w-8 h-8 flex-shrink-0" />
                      <div>
                        {typeof bullet === "string" ? (
                          <span>{bullet.endsWith(".") ? bullet : `${bullet}.`}</span>
                        ) : (
                          bullet
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                                  

                

                {/* button sticks to bottom */}
                <Link to={item.link} className='mt-auto text-center inline-block bg-secondary text-white px-8 py-2 rounded hover:bg-buttonhover transition-colors duration-300'>
                  DISCOVER
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services