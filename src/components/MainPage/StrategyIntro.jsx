import React from "react";
import { motion } from "framer-motion";
import {assets} from '../../assets/assets'
import { Link } from "react-router-dom";
motion;

const Service1 = () => {
  return (
    <section id="Services" className="w-full bg-gray-200 overflow-hidden">
      <div
        style={{ backgroundColor: "#2d6048" }}
        className="flex flex-col justify-center items-center text-center pt-5 pb-5 sm:pt-10 sm:pb-10"
      >
        <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold">
          Whole-Home Energy Strategy
        </h2>
        <div
          className="mt-4 h-1 w-1/2"
          style={{ backgroundColor: "#b7c87a" }}
        ></div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center container mx-auto p-7 sm:p-12 md:px-20 lg:px-32 w-full overflow-hidden "
        id="About"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
          <img
            src={assets.strategy_intro}
            alt=""
            className="w-full max-w-none sm:max-w-sm md:w-1/2 lg:max-w-lg lg:h-[650px]"
          />

          <div className="flex flex-col items-center md:items-start text-center md:text-left text-gray-900">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-1 xg:mb-10 mt-5 md:mt-0">
              A complete energy plan
            </h1>

            <div className="text-base sm:text-lg xl:text-2xl max-w-lg">

              <p className="mt-5 xl:mt-10">
                We assess how your home uses and loses energy, design a tailored upgrade plan to reach an A-rated performance, and ensure your systems continue working at peak efficiency over time.
              </p>

              <p className="mt-5 xl:mt-10">
                This end-to-end strategy helps you reduce bills, improve comfort, and future-proof your home.
              </p>
            </div>

            {/* <button className=" mt-10 bg-green-700 text-white px-8 py-2 rounded ">
              Explore 
            </button> */}

            <Link to="/strategy-services" className='bg-green-600 px-8 py-3 rounded text-white mt-5 hover:bg-green-800 transition-colors duration-300'>Explore</Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Service1;
