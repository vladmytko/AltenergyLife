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
          <h2 className="text-3xl md:text-5xl font-semibold pt-20 ">
            Altenergy.Life
          </h2>
          <h2 className="text-3xl md:text-5xl inline-block font-semibold pt-4">
            Smarter, Warmer, Future-Ready Homes
          </h2>
        </motion.div>
      </div>
      <div
        style={{ backgroundColor: "#2d6048" }}
        className="flex flex-col justify-center items-center text-center pt-5 pb-5 sm:pt-10 sm:pb-10"
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
          About Us
        </h2>
        <div
          className="mt-4 h-1 w-1/2"
          style={{ backgroundColor: "#b7c87a" }}
        ></div>
      </div>

      <div className="container mx-10 px-4 lg:flex lg:items-center lg:gap-16 py-16">
        {/* LEFT SIDE - TEXT */}
        <div className="lg:w-1/2 space-y-10 text-gray-900 ">
          <h2 className="text-3xl md:text-4xl mt-8 lg:mt-0 font-bolt leading-tight">
            About us
          </h2>

          <div className="space-y-4 text-gray-800 ">
            <p className="text-sm md:text-base">
              Tailored for your home — every system designed to maximise comfort
              and efficiency.
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-sm md:text-base">
              Long-term savings & reliability — solar panels with 25+ year
              lifespan, heat pumps with up to 300% efficiency, insulation saving
              up to 35% on heating costs.
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-sm md:text-base">
              Premium experience — modern, elegant installations that enhance
              your property.
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-sm md:text-base">
              UK expertise — fully aligned with EPC ratings, regulations, and
              local climate.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}

        <div className="lg:w-1/2 mt-10 lg:mt-5 flex flex-col pl-0 sm:pl-10">
          <div className="relative">
            <img
              src={assets.about_image}
              alt=""
              className="w-full object-contain rounded-lg h-[600px] xl:h-[800px] "
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

      <div className="w-full bg-gray-100 px-10 flex flex-col lg:flex-row lg:items-center lg:gap-16 py-16">
        {/* LEFT SIDE - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-5 flex flex-col gap-2 order-2 lg:order-1">
          <div className="relative">
            <img
              src={assets.heat_pump}
              alt=""
              className="w-full object-cover rounded"
            />
          </div>
        </div>



        {/* RIGHT SIDE - Text */}

        <div className="lg:w-1/2 space-y-10 text-gray-900 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl mt-8 lg:mt-0 font-bolt leading-tight">
            Discover the Benefits
          </h2>

          <div className="space-y-4 text-gray-800 ">
            <p className="text-sm md:text-base">
              Lower energy bills — solar panels save up to 60% on electricity
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-sm md:text-base">
              Consistent comfort — no draughts, no cold spots.
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-sm md:text-base">
              Future-proof home — compliant with UK energy standards.
            </p>

            <hr className="mt-6 border-gray-200" />

            <p className="text-sm md:text-base">
              Effortless luxury — systems that work for you, not the other way around.
            </p>
          </div>
        </div> 
      </div>
    </section>
    
  );
};

export default About;
