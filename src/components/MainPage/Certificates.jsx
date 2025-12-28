import React from 'react'
import {assets} from '../../assets/assets'
import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
motion

export default function Certificates() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Reference to the container
    const container = containerRef.current;

    // Initial scroll position
    let scrollAmount = 0;

    // Auto-scroll function
    const scrollIcons = () => {
      if (container) {
        scrollAmount += container.clientWidth / 3; // scroll a third of container width
        if (scrollAmount >= container.scrollWidth) {
          scrollAmount = 0; // restart from beginning
        }
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    // Set interval for auto-scrolling
    const interval = setInterval(scrollIcons, 2000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
      <div ref={containerRef} className="bg-white flex overflow-x-auto lg:overflow-visible h-28 md:h-32 lg:h-34 xl:h-40 gap-1 md:gap-2 lg:gap-10  md:justify-start lg:justify-center items-center snap-x snap-mandatory">
        <motion.img src={assets.napit_logo} alt="NAPIT" className="flex-none w-1/3 md:w-1/3 lg:w-auto h-full object-contain snap-center" initial={{ opacity: 0, scale: 0.8 }}   whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }}/>
        <motion.img src={assets.oftec_logo} alt="OFTEC" className="flex-none w-1/3 md:w-1/3 lg:w-auto h-full object-contain snap-center" initial={{ opacity: 0, scale: 0.8 }}   whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }}/>
        <motion.img src={assets.gas_safe} alt="Gas Safe" className="flex-none w-1/3 md:w-1/3 lg:w-auto h-full object-contain snap-center" initial={{ opacity: 0, scale: 0.8 }}   whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }}/>
        <motion.img src={assets.green_deal_approved_logo} alt="Green Deal Approved" className="flex-none w-1/3 md:w-1/3 lg:w-auto h-full object-contain snap-center" initial={{ opacity: 0, scale: 0.8 }}   whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }}/>
        <motion.img src={assets.recc_logo} alt="RECC" className="flex-none w-1/3 md:w-1/3 lg:w-auto h-full object-contain snap-center" initial={{ opacity: 0, scale: 0.8 }}   whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }}/>
        <motion.img src={assets.mcs_logo} alt="MCS" className="flex-none w-1/3 md:w-1/3 lg:w-auto h-full object-contain snap-center" initial={{ opacity: 0, scale: 0.8 }}   whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }}/>
      </div>
  )
}
