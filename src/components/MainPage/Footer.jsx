import React from "react";
import SpcialIcons from "./SocialIcons";
import Certificates from "./Certificates";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 lg:px-32 text-white bg-gradient-to-r from-[#2E7D32] to-[#2d6048] w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-wrap lg:flex-row justify-center items-center lg:items-start">
        {/* First Column */}
        <div className="w-1/2 lg:w-1/5 mb-8 lg:mb-0 lg:mr-1">
          {/* <h3 className="text-white text-lg font-bold mb-3">About Us</h3> */}
          <img src={assets.main_logo} alt="main_logo" className="w-96" />
          {/* <p className=" mt-4">We deliver what others only promise.</p> */}
        </div>

        {/* Second Column */}
        <div className="w-1/2 lg:w-1/5 mb-8 lg:ml-28 lg:mr-1 ">
          <ul className="flex flex-col gap-2">
            {/* Address */}
            <li className="flex flex-col items-center lg:items-start space-y-0">
              <span className="text-white text-lg font-bold mb-3">Address</span>
              <span>124 City Road</span>
              <span>London</span>
              <span>EC1V 2N</span>
            </li>
            {/* Phone */}
            <li className="flex flex-col items-center lg:items-start space-y-0">
              <span className="text-white text-lg font-bold mb-3 ">Phone</span>
              <span>+44 7520 603184</span>
            </li>
            {/* Email */}
            <li className="flex flex-col items-center lg:items-start space-y-0">
              <span className="text-white text-lg font-bold mb-3">Email</span>
              <a href="mailto:hello@domain.com" className="hover:underline">
                info@altenergylife.co.uk
              </a>
            </li>

            {/* Privacy Policy */}
            <li className="flex flex-col items-center lg:items-start space-y-0">
              <span className="text-white text-lg font-bold mb-3">Privacy Policy</span>
              <a href="/privacypolicy" className="hover:underline">
                View Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0 lg:mr-1 text-center ">
          <h3 className="text-white text-lg font-bold mb-3">Social Network</h3>
          <SpcialIcons />
        </div>
      </div>

      <div className="border-t border-gray-300 py-4  text-center text-gray-300 ">
       © 2024 AltEnergy Life. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
