import React from "react";
import { StrategyItems } from "./StrategyItems";
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
          <h2 className="text-5xl sm:text-6xl inline-block max-w-3xl font-medium pt-20 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            A Smarter Way to Improve Your Home's Energy Performance
          </h2>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center items-center sm:gap-6">
            <Link
              to="/about"
              className="w-fit border border-white px-8 py-3 rounded hover:bg-secondary hover:border-secondary transition-colors duration-300"
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

      <div
        style={{ backgroundColor: "#2d6048" }}
        className="flex flex-col justify-center items-center text-center pt-5 pb-5 sm:pt-10 sm:pb-10 mb-10"
      >
        <h2 className="text-white text-3xl md:text-4xl font-medium">
          Energy Strategies
        </h2>
        <div
          className="mt-4 h-1 w-3/4"
          style={{ backgroundColor: "#b7c87a" }}
        ></div>

        <p className="text-white text-lg md:text-xl justify-center px-4 md:px-32 pt-5">
          Every home is different — and so is its energy use. Our energy
          strategies focus on identifying where your home is losing efficiency
          and applying the right solutions to reduce costs, improve comfort, and
          increase long-term value.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col gap-10 md:gap-16 my-5">
          {StrategyItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={item.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:items-stretch md:gap-0 md:flex-row ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="h-64 sm:h-80 md:h-full md:min-h-[340px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-3xl sm:text-4xl font-medium mb-4">
                    {item.title}
                  </h3>

                  <div className="text-gray-900 text-lg sm:text-xl space-y-3 font-light">
                    {item.description
                      .split(". ")
                      .filter(Boolean)
                      .map((sentence, i) => (
                        <div key={i} className="flex gap-3">
                          <p className="leading-relaxed">{sentence}</p>
                        </div>
                      ))}
                  </div>

                  {/* Optional button */}
                  {/*
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex w-fit bg-secondary text-white px-8 py-3 rounded hover:bg-buttonhover transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                  */}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StrategyServices;
