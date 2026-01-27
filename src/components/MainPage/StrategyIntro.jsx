import React from "react";
import { motion } from "framer-motion";
import {assets} from '../../assets/assets'
import { Link } from "react-router-dom";
motion;

const Service1 = () => {
  return (
    <section id="Services" className="w-full bg-gray-100 overflow-hidden">
      <div
        style={{ backgroundColor: "#2d6048" }}
        className="flex flex-col justify-center items-center text-center pt-5 pb-5 sm:pt-10 sm:pb-10"
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-medium">
          One Plan. Lower Bills. More Independence
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
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-20">
          <img
            src={assets.strategy_intro}
            alt=""
            className="w-full max-w-sm"
          />

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md text-gray-900">
            
            {[
              {
                title: "Energy Assessment",
                desc: "We identify where your home loses energy and how to fix it.",
              },
              {
                title: "Tailored upgrade plan",
                desc: "A clear roadmap to reach high energy performance.",
              },
              {
                title: "Long-term efficiency",
                desc: "Ongoing improvements that keep your home comfortable and costs down.",
              },
            ].map((item) => (
              <div key={item.title} className="w-full max-w-md mt-5">
                <h3 className="text-4xl md:text-5xl font-medium">
                  {item.title}
                </h3>
                <p className="text-xl md:text-2xl mt-2 font text-gray-800">
                  {item.desc}
                </p>
              </div>
            ))}

            <Link to="/strategy-services" className=' px-8 py-3 rounded text-white mt-5 bg-[#252f72] hover:bg-[#2139c0] transition-colors duration-300'>Explore</Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Service1;
