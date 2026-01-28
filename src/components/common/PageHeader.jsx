import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "../MainPage/NavBar";
import { Link } from "react-router-dom";
motion;

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  showAbout = true,
  showContact = true,
}) => {
  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <NavBar />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-4xl sm:text-6xl leading-[1.2] md:leading-[1.4] inline-block font-medium pt-20 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          {title}
        </h2>

        {subtitle && (
          <h3 className="text-2xl md:text-4xl font inline-block mt-5 max-w-4xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {subtitle}
          </h3>
        )}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center items-center sm:gap-6">
          {showAbout && (
            <Link
              to="/about"
              className="w-fit border border-white px-8 py-3 rounded hover:bg-secondary hover:border-secondary transition-colors duration-300"
            >
              About Us
            </Link>
          )}

          {showContact && (
            <a
              href="/#Contact"
              className="w-fit bg-secondary px-8 py-3 rounded hover:bg-buttonhover transition-colors duration-300"
            >
              Contact Us
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PageHeader;