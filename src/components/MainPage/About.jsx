import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";
motion;

export const About = () => {
  return (
    <section>
      <div
        className="h-[80vh] bg-cover bg-center flex items-center w-full overflow-hidden "
        style={{ backgroundImage: `url(${assets.about_hero_image})` }}
      >
        <div className=""></div>
        <NavBar />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
        >
          <h2 className="text-5xl sm:text-6xl font-medium pt-20 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            Altenergy.Life
          </h2>
        </motion.div>
      </div>

      <div
        style={{ backgroundColor: "#2d6048" }}
        className="flex flex-col justify-center items-center text-center py-5 "
      >
        <h2 className="text-white text-3xl md:text-4xl font-medium">
          Smarter, Warmer, Future-Ready Homes
        </h2>
        <div
          className="mt-4 h-1 w-1/2"
          style={{ backgroundColor: "#b7c87a" }}
        ></div>
      </div>

      <div className="w-full bg-gray-100 px-10 flex flex-col lg:flex-row lg:items-center lg:gap-16 py-5 sm:py-10">
        {/* LEFT SIDE - Image */}
        <div className="lg:w-2/5 mt-10 lg:mt-5 flex flex-col gap-2 order-2 lg:order-1">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]">
            <img
              src={assets.founder}
              alt=""
              className="w-full h-full object-contain rounded "
            />
          </div>
        </div>

        {/* RIGHT SIDE - Text */}

        <div className="lg:w-1/2 space-y-10 text-gray-900 order-1 lg:order-2">
          <h2 className="text-3xl md:text-5xl mt-8 lg:mt-0 font-bolt leading-tight">
            Our Story
          </h2>

          <div className="space-y-4 text-gray-900 ">
            <p className="text-xl md:text-2xl">
              Founded by Oleksandr Sharandak, a renewable energy specialist
              passionate about solar panels, heat pumps, and home efficiency,
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-xl md:text-2xl">
              Altenergy.life transforms UK homes into energy-smart, comfortable,
              and future-ready spaces.
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-xl md:text-2xl">
              We deliver bespoke, high-end solutions that save money, improve
              comfort, and boost property value.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-10 flex flex-col lg:flex-row lg:items-center lg:gap-16 py-10">
        {/* LEFT SIDE - TEXT */}
        <div className="lg:w-1/2 space-y-10 text-gray-900 ">
          <h2 className="text-3xl md:text-5xl mt-8 lg:mt-0 font-bolt leading-tight">
            Why Choose Altenergy.Life
          </h2>

          <div className="space-y-4 text-gray-900 ">
            <p className="text-xl md:text-2xl">
              Tailored for your home — every system designed to maximise comfort
              and efficiency.
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-xl md:text-2xl">
              Long-term savings & reliability — solar panels with 25+ year
              lifespan, heat pumps with up to 300% efficiency, insulation saving
              up to 35% on heating costs.
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-xl md:text-2xl">
              Premium experience — modern, elegant installations that enhance
              your property.
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-xl md:text-2xl">
              UK expertise — fully aligned with EPC ratings, regulations, and
              local climate.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}

        <div className="lg:w-2/5 mt-3 lg:mt-5 flex flex-col pl-0 sm:pl-10">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]">
            <img
              src={assets.about_image}
              alt=""
              className="w-full h-full object-contain rounded"
            />

            <Link
              to="/#Contact"
              className="absolute top-6 left-24 bg-[#76A959] text-white px-8 py-3 text-sm font-medium tracking-wide flex items-center gap-3 shadow-lg hover:bg-green-800 transition-colors duration-300"
            >
              CONTACT US <span className="text-lg">➜</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 px-10 flex flex-col lg:flex-row lg:items-center lg:gap-16 py-5 sm:py-16">
        {/* LEFT SIDE - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-5 flex flex-col gap-2 order-2 lg:order-1">
          <div className="relative h-[200px] sm:h-[400px] md:h-[500px] lg:h-[700px]">
            <img
              src={assets.smart_meter_readings}
              alt=""
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>

        {/* RIGHT SIDE - Text */}

        <div className="lg:w-1/2 space-y-10 text-gray-900 order-1 lg:order-2">
          <h2 className="text-3xl md:text-5xl mt-8 lg:mt-0 font-bolt leading-tight">
            Discover the Benefits
          </h2>

          <div className="space-y-4 text-gray-900 ">
            <p className="text-xl md:text-2xl">
              Lower energy bills — solar panels save up to 60% on electricity
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-xl md:text-2xl">
              Consistent comfort — no draughts, no cold spots.
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-xl md:text-2xl">
              Future-proof home — compliant with UK energy standards.
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-xl md:text-2xl">
              Effortless luxury — systems that work for you, not the other way
              around.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
