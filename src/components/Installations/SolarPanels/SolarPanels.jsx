import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../../assets/assets";
import { SolarPanelsItems } from "./SolarPanelsItems";
import PageHeader from "../../common/PageHeader";
motion;

const SolarPanels = () => {
  return (
    <section className="white">

      {/* =========================== HEADER =========================== */}

      <PageHeader 
        title="Solar Panels"
        subtitle="This is not just an installation — it’s a long-term energy asset."
        backgroundImage={assets.solar_panels_hero}
      />

      {/* =========================== ENF OF HEADER =========================== */}

      {/* =========================== INFORMATION SECTIONS =========================== */}

      <div className="w-full px-10 flex flex-col lg:flex-row lg:items-center lg:gap-16 py-16">
        {/* RIGHT SIDE - Text */}

        <div className="lg:w-1/2 space-y-10 text-gray-900">
          <h2 className="text-3xl md:text-6xl mt-8 lg:mt-0 font-bolt leading-tight">
            Discover the Benefits
          </h2>

          <div className="space-y-4 text-gray-900 ">
            <p className="text-xl md:text-2xl">
              Solar panels are one of the most effective upgrades for UK
              homeowners looking to{" "}
              <span className="font-semibold">
                cut bills, raise EPC ratings, and protect against rising energy
                prices
              </span>
              .
            </p>
          </div>
        </div>

        {/* LEFT SIDE - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-5 flex flex-col gap-2 ">
          <div className="relative">
            <img
              src={assets.solar_panels_2}
              alt=""
              className="w-full object-cover rounded"
            />
          </div>
        </div>
      </div>

      {/* =========================== END OF INFORMATION SECTIONS =========================== */}


      {/* =========================== BULLET POINTS ========================================== */}

      <div className="items-center text-center px-6 md:px-24 py-20 space-y-12 text-gray-900 bg-gray-100">
        <h2 className="text-3xl md:text-6xl mt-8 lg:mt-0 font-bolt leading-tight">
          Why homeowners choose us
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {SolarPanelsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-10 flex flex-col items-center text-center gap-6 shadow-md"
              >
                <div className="w-20 h-20 flex items-center justify-center text-3xl rounded-full bg-primary text-white">
                  {item.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-medium text-gray-900">
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
        {/* RIGHT SIDE - Text */}

        <div className="lg:w-1/2 space-y-10 text-gray-900 order-1 lg:order-2">
          <div className="space-y-8 text-gray-900 ">
            <p className="text-xl md:text-2xl">
              Our systems are designed to deliver{" "}
              <span className="font-semibold">
                up to 60% reduction in electricity costs
              </span>
              , using high-efficiency panels engineered to perform reliably for{" "}
              <span className="font-semibold">25+ years</span>.
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-xl md:text-2xl">
              Every installation is tailored to roof orientation, shading, and
              household usage — no generic layouts.
            </p>
          </div>
        </div>

        {/* LEFT SIDE - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-5 flex flex-col gap-2 order-2 lg:order-1">
          <div className="relative">
            <img
              src={assets.solar_panels_3}
              alt=""
              className="w-full object-cover rounded"
            />
          </div>
        </div>
      </div>

      {/* =========================== END OF INFORMATION SECTIONS =========================== */}
    </section>
  );
};

export default SolarPanels;
