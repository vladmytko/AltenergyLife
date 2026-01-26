import React from "react";
import { NavBar } from "./NavBar";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { scrollToHash } from "../utils/scrollToHash";

const Header = () => {
  return (
    <div
      className="h-[80vh] md-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/main_header.jpg')" }}
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
        <h2 className="text-3xl md:text-5xl leading-[1.2] md:leading-[1.4] inline-block font-semibold pt-20 ">
          Clean Energy Solutions for Homes & Businesses
        </h2>
        <h3 className="text-xl md:text-2xl text-gray-300 font-semibold inline-block mt-5 max-w-4xl">
          We design, install and maintain solar power and energy storage systems tailored to your needs. 
        </h3>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center items-center sm:gap-6">
          <Link
            to="/#Contact"
            onClick={() => scrollToHash("#Contact")}
            className="w-[210px] px-8 py-3 border border-[#252f72] rounded bg-[#252f72] hover:bg-[#2139c0] transition-colors duration-300"
          >
            Get a Consultation
          </Link>

          <Link
            to="/about"
            className="w-[210px]  border border-white px-8 py-3 rounded hover:border-gray-400 hover:text-gray-400 transition-colors duration-300"
          >
            About Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
