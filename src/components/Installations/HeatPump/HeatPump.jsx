import React from "react";
import { NavBar } from "../../MainPage/NavBar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import { HeatPumpItems } from "./HeatPumpItems";
motion;

const HeatPump = () => {
  return (
    <section className="white">
      <div
        className="h-[50vh] bg-cover bg-center flex items-center w-full overflow-hidden"
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
            Heat Pumps
          </h2>
          <h3 className="text-3xl md:text-5xl inline-block font-medium pt-4">
            Heat pumps provide heating in a fundamentally smarter way.
          </h3>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center items-center sm:gap-6">
            <Link
              to="/about"
              className="w-fit border border-white px-8 py-3 rounded hover:border-gray-400 hover:text-gray-400 transition-colors duration-300"
            >
              About Us
            </Link>
            <a
              href="/#Contact"
              className="w-fit bg-secondary px-8 py-3 rounded hover:bg-buttonhover transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      <div className="w-full px-10 flex flex-col lg:flex-row lg:items-center lg:gap-16 py-16">
        {/* RIGHT SIDE - Text */}

        <div className="lg:w-1/2 space-y-10 text-gray-900">
          <h2 className="text-3xl md:text-6xl mt-8 lg:mt-0 font-bolt leading-tight">
            Discover the Benefits
          </h2>

          <div className="space-y-4 text-gray-800 ">
            <p className="text-medium md:text-2xl">
              With efficiency levels reaching <span className="font-semibold">up to 300%</span>, they generate
              significantly more heat than the electricity they consume. 
            </p>

            <hr className="mt-4 border-gray-200" />

            <p className="text-medium md:text-2xl">
              This is heating for homeowners who plan ahead.
            </p>


          </div>
        </div>

        {/* LEFT SIDE - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-5 flex flex-col gap-2 ">
          <div className="relative">
            <img
              src={assets.heat_pump}
              alt=""
              className="w-full object-cover rounded"
            />
          </div>
        </div>
      </div>

      <div className="items-center text-center px-6 md:px-24 py-20 space-y-12 text-gray-900 bg-gray-100">
        <h2 className="text-3xl md:text-6xl mt-8 lg:mt-0 font-bolt leading-tight">
          Why heat pumps make sense
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {HeatPumpItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-10 flex flex-col items-center text-center gap-6 shadow-md"
              >
                <div className="w-20 h-20 flex items-center justify-center text-3xl rounded-full bg-primary text-white">
                  {item.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {item.text}
                </h3>

                {item.description && (
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-10 flex flex-col lg:flex-row lg:items-center lg:gap-16 py-16">
        {/* RIGHT SIDE - Text */}

        

        <div className="lg:w-1/2 space-y-10 text-gray-900 order-2">
          <div className="space-y-8 text-gray-800 ">
            <p className="text-medium md:text-2xl">
              This
              translates into lower running costs, stable indoor temperatures,
              and reduced dependence on gas.
            </p>

             <hr className="mt-4 border-gray-200" />
            <p className="text-medium md:text-2xl">
              We design each system around insulation levels and heat demand, ensuring consistent warmth without spikes or noise.
            </p>

             
          </div>
        </div>

        {/* LEFT SIDE - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-5 flex flex-col gap-2 order-1">
          <div className="relative">
            <img
              src={assets.heat_pump}
              alt=""
              className="w-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeatPump;
