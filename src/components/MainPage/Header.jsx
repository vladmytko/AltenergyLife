import React from "react";
import { NavBar } from "./NavBar";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { scrollToHash } from "../utils/scrollToHash";

const Header = () => {
  return (
    <div
      className="h-[50vh] md:h-[80vh] md-4 bg-cover bg-center flex items-center w-full overflow-hidden"
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
        <h2 className="text-2xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore solutions that fit your dreams
        </h2>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center items-center sm:gap-6">
          <Link
            to="/#Contact"
            onClick={() => scrollToHash("#Contact")}
            className="w-fit px-8 py-3 rounded bg-green-600 hover:bg-green-800 transition-colors duration-300"
          >
            Contact Us
          </Link>

          <Link
            to="/about"
            className="w-fit border border-white px-8 py-3 rounded hover:border-gray-400 hover:text-gray-400 transition-colors duration-300"
          >
            About Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
