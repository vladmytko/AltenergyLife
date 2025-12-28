import React from "react";
import { motion } from "framer-motion";
import {assets} from '../../assets/assets'
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";
motion;

export const About = () => {
  return (
    <section className="bg-white">
      <NavBar />
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:gap-16 py-16">
        
       
          {/* LEFT SIDE - TEXT */}
          <div className="lg:w-1/2 space-y-10 text-gray-900 ">
            <h2 className="text-3xl md:text-4xl mt-8 lg:mt-0 font-bolt leading-tight">About us</h2>

            <div className="space-y-4 text-gray-800 ">
              <p className="text-sm md:text-base">
                We elevate UK homes to modern energy standards with quiet
                precision.
              </p>

              <hr className="mt-6 border-gray-200"/>

              <p className="text-sm md:text-base">
                Combine engineering accuracy, minimalist design, and real
                performance data to reduce energy loss and increase long-term
                property value.
              </p>

              <hr className="mt-6 border-gray-200"/>

              <p className="text-sm md:text-base">
                From solar panels and heat pumps to insulation, windows, and
                future A-rated upgrades — we work end-to-end, without the noise.
              </p>

              <hr className="mt-6 border-gray-200"/>

              <p className="text-sm md:text-base">
                A 20–40% reduction in heat loss isn’t about “saving money”. It’s
                about the future home your family will inherit.
              </p>

              <hr className="mt-6 border-gray-200"/>

              <p className="text-sm md:text-base">
                Art & Energy is our philosophy: clean, intentional, effortless.
                We deliver what others only promise.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}

          <div className="lg:w-1/2 mt-10 lg:mt-5 flex flex-col gap-6">
            <div className="relative">
              <img
                src={assets.about_image}
                alt=""
                className="w-full  md:h-[800px] object-cover rounded"
              />

              
            <Link to="/#Contact" className="absolute top-6 left-6 bg-[#76A959] text-white px-8 py-3 text-sm font-medium tracking-wide flex items-center gap-3 shadow-lg hover:bg-green-800 transition-colors duration-300">CONTACT US <span className="text-lg">➜</span></Link>

            </div>
          </div>

          
        
      </div>
    </section>
  );
};

export default About;
