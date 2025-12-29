import React from "react";
import { StrategyItems } from "./StrategyItems";
import { assets } from "../../assets/assets";
import { NavBar } from "../MainPage/NavBar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
motion;
 
const StrategyServices = () => {
  return (
    <section className="white">
      <div
        className="h-[80vh] bg-cover bg-center flex items-center w-full overflow-hidden"
        style={{ backgroundImage: "url('/strategy_header.jpeg')" }}
        id="Header"
      >
        <NavBar />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
        >
          <h2 className="text-2xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
            A Smarter Way to Improve Your Home's Energy Performance
          </h2>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center items-center sm:gap-6">
            <Link to="/about" className="w-fit border border-white px-8 py-3 rounded hover:border-gray-400 hover:text-gray-400 transition-colors duration-300">
              About Us
            </Link>
            <a href="#Contact" className="w-fit bg-green-600 px-8 py-3 rounded hover:bg-green-800 transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      <div
        style={{ backgroundColor: "#2d6048" }}
        className="flex flex-col justify-center items-center text-center pt-5 pb-5 sm:pt-10 sm:pb-10 mb-10"
      >
        <h2 className="text-white text-xl sm:text-2xl lg:text-4xl font-semibold">
          Energy Strategies
        </h2>
        <div
          className="mt-4 h-1 w-1/3"
          style={{ backgroundColor: "#b7c87a" }}
        ></div>

        <p className="text-white text-base sm:text-xl justify-center px-4 md:px-32 pt-5">
          Every home is different — and so is its energy use. Our energy
          strategies focus on identifying where your home is losing efficiency
          and applying the right solutions to reduce costs, improve comfort, and
          increase long-term value.
        </p>
      </div>

      <div className="container mx-auto px-1">
        {/* grid with 1 / 2 / 4 columns on different screens */}
        <div className="grid sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {StrategyItems.map((item) => (
            <div
              key={item.id}
              className="bg-white flex flex-col h-full min-h-[550px] min-w-[300px] md:last:col-span-2 md:last:mx-auto md:last:max-w-[420px] xl:last:col-span-1 xl:last:max-w-none"
            >
              {/* image + optional badge */}
              <div className="relative rounded-xl h-[30vh] md:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* text content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-3xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-900 text-base sm:text-lg mb-4 space-y-4">
                  {item.description.split(". ").map((sentence, index) => (
                    <span key={index} className="flex">
                      <img
                        src={assets.tick}
                        alt="tick"
                        className="w-8 h-8 flex-shrink-0"
                      />
                      <span>{sentence}</span>
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
};

export default StrategyServices;
