import React from "react";
import SocialIcons from "./SocialIcons";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 lg:px-32 text-white bg-primary w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-wrap lg:flex-row justify-center items-center lg:items-start">

        {/* First Column */}
        <div className="w-1/2 xl:w-1/5 mb-8 lg:mb-0 lg:mr-1 -mt-8 ">
          {/* <h3 className="text-white text-lg font-bold mb-3">About Us</h3> */}
          <img src={assets.main_logo} alt="main_logo" className="w-96" />
          {/* <p className=" mt-4">We deliver what others only promise.</p> */}
        </div>

        {/* Second Column */}
        <div className="w-1/2 lg:w-1/5 mb-8 lg:ml-28 lg:mr-1 ">
          <ul className="flex flex-col gap-2">
            {/* Address */}
            <li className="flex flex-col text-center xl:text-start space-y-0">
              <h3 className="text-white text-xl font-medium mb-3">ADDRESS</h3>
              <span>124 City Road</span>
              <span>London</span>
              <span>EC1V 2N</span>
            </li>
           

            {/* Privacy Policy */}
            <li className="flex flex-col text-center xl:text-start space-y-0">
              <h3 className="text-white text-xl font-medium mb-3">
                PRIVACY POLICY
              </h3>
              <a href="/privacypolicy" className="hover:underline">
                View Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="w-full xl:w-1/4 text-center xl:text-start mb-8 xl:mb-0">
          <h3 className="text-white text-xl font-medium mb-3">CONTACT</h3>

          <a href="mailto:hello@domain.com" className="hover:underline">
            <FontAwesomeIcon icon={faAt} /> info@altenergylife.co.uk
          </a>

          
          <span className="block mt-1"><FontAwesomeIcon icon={faPhone} />+44 7520 603184</span>
        </div>

        {/* Forth Column */}
        <div className="w-full xl:w-1/4 mb-8 lg:mb-0 lg:mr-1 text-center ">
          <h3 className="text-white text-xl font-medium mb-3">
            SOCIAL NETWORK
          </h3>
          <SocialIcons />
        </div>
      </div>

      <div className="border-t border-gray-300 my-3 text-center text-gray-300 ">
        © 2024 AltEnergy Life. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
