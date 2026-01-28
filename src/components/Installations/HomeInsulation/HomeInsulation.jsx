import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../../assets/assets";
import { HomeInsulationItems } from "./HomeInsulationItems";
import PageHeader from "../../common/PageHeader";
motion;

const HomeInsulation = () => {
  return (
    <section className="white">

      {/* =========================== HEADER =========================== */}
    
      <PageHeader 
        title="Home Insulation"
        subtitle="Without proper insulation, even the best systems underperform."
        backgroundImage={assets.home_insulation_hero}
      />

      {/* =========================== ENF OF HEADER =========================== */}

      {/* =========================== INFORMATION SECTIONS =========================== */}

      <div className="w-full px-10 flex flex-col lg:flex-row lg:items-center lg:gap-16 py-16">
        {/* LEFT SIDE - Text */}

        <div className="lg:w-1/2 space-y-10 text-gray-900">
          <h2 className="text-4xl md:text-6xl mt-8 lg:mt-0 font-bolt leading-tight">
            Discover the Benefits
          </h2>

          <div className="space-y-4 text-gray-900 ">
            <p className="text-xl md:text-2xl">
              Our insulation solutions are designed to reduce heat loss by{" "}
              <span className="font-semibold">up to 35%</span>, locking warmth
              inside the home and significantly lowering heating demand.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-5 flex flex-col gap-2 ">
          <div className="relative">
            <img
              src={assets.home_insulation_2}
              alt=""
              className="w-full object-cover rounded"
            />
          </div>
        </div>

      </div>

      {/* =========================== END OF INFORMATION SECTIONS =========================== */}


      {/* =========================== BULLET POINTS ========================================== */}

      <div className="items-center text-center px-6 md:px-24 py-3 md:py-20 space-y-12 text-gray-900 bg-gray-100">
        <h2 className="text-3xl md:text-6xl mt-6 lg:mt-0 font-bolt leading-tight">
          Why insulation matters
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {HomeInsulationItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-10 flex flex-col items-center text-center gap-6 shadow-md"
              >
                <div className="w-16 md:w-20 h-16 md:h-20 flex items-center justify-center text-3xl rounded-full bg-primary text-white">
                  {item.icon}
                </div>

                <h3 className="text-lg md:text-2xl font-meidum text-gray-900">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================== END OF BULLET POINTS =================================== */}


      {/* =========================== INFORMATION SECTIONS =========================== */}

      <div className="w-full px-10 flex flex-col lg:flex-row lg:items-center lg:gap-16 py-16">
        
        {/* Left SIDE - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-5 flex flex-col gap-2 order-2 lg:order-1">
          <div className="relative">
            <img
              src={assets.insulation}
              alt=""
              className="w-full object-cover rounded"
            />
          </div>
        </div>

        {/* Right SIDE - Text */}
        <div className="lg:w-1/2 space-y-10 text-gray-900 order-1 lg:order-2">
          <div className="space-y-8 text-gray-900 ">
            <p className="text-xl md:text-2xl">
              Each property is assessed individually to maximise performance.
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-xl md:text-2xl">
              Insulation is the invisible upgrade that makes everything work
              better.
            </p>
          </div>
        </div>

        

      </div>

      {/* =========================== END OF INFORMATION SECTIONS =========================== */}
    </section>
  );
};

export default HomeInsulation;
