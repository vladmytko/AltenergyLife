import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
motion;

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [cooldown, setCooldown] = useState(false);
  const COOLDOWN_MS = 20000; // 20 seconds cooldown

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    // Honeypot field check
    if (form.current.company.value) {
      return; // Honeypot field filled, likely a bot
    }

    setStatus("sending");
    setCooldown(true);

    // Start cooldown timer
    setTimeout(() => {
      setCooldown(false);
    }, COOLDOWN_MS);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID, 
        form.current, 
        {
        publicKey: EMAILJS_PUBLIC_KEY,
        })
      .then(
        () => {
          console.log("Email sent successfully");
          setStatus("success");
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="Contact"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/form_background.jpg')" }}
    >
      <div className="absolute inset-0 bg-green-700/60"></div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto px-3 sm:px-6 py-12"
        id="Contact"
      >
        <div className="flex flex-col lg:flex-row gap-10 mx-auto max-w-xl lg:max-w-none lg:w-full ">
          {/* LEFT TEXT */}
          <div className="lg:w-1/2 flex flex-col text-center justify-center text-white mr-5">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In Touch{" "}
            </h1>
            <p className="text-base sm:text-xl mt-8 font-semibold mb-2">
              Interested in learning more about our products and services? Get a
              free quote today by filling out our online form or giving us a
              call. Our team will be happy to answer your questions and help you
              find the perfect solution for your home.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:w-1/2">
            {status === "success" ? (
              <div className="bg-white rounded-2xl p-12 text-center">
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                  Thank you!
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Your message has been sent successfully. Out team will get
                  back to you shortly.
                </p>
                <p className="text-sm text-gray-500">
                  We usually respond within 24 hours.
                </p>
              </div>
            ) : (
              /* FORM STARTS HERE */
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-white rounded-2xl p-3 sm:p-8 space-y-4"
              >
                {/* NAME INPUT */}
                <div className="w-full text-left">
                  <label className="block text-base sm:text-xl font-medium mb-1">
                    Name
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-md py-1 sm:py-3 px-4 mt-2 focus:outline-none focus:ring focus:ring-green-500"
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    maxLength={80}
                    required
                  />
                </div>

                {/* EMAIL INPUT */}
                <div className="w-full text-left">
                  <label className="block text-base sm:text-xl font-medium mb-1">
                    Email
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-md py-1 sm:py-3 px-4 mt-2 focus:outline-none focus:ring focus:ring-green-500"
                    type="email"
                    name="user_email"
                    placeholder="Your email"
                    maxLength={120}
                    required
                  />
                </div>

                {/* PHONE NUMBER INPUT */}
                <div className="w-full text-left">
                  <label className="block text-base sm:text-xl font-medium mb-1">
                    Phone
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-md py-1 sm:py-3 px-4 mt-2 focus:outline-none focus:ring focus:ring-green-500"
                    type="tel"
                    name="user_phone"
                    placeholder="+44 or 07..."
                    pattern="^(\+44|44|0)7\d{9}$"
                    title="Enter a valid UK phone number"
                    maxLength={20}
                  />
                </div>

                {/* MESSAGE INPUT */}
                <div className="my-6 text-left">
                  <label className="block text-base sm:text-xl font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full  border border-gray-300 rounded-md py-1 sm:py-3 px-4 mt-2 h-48 resize-none focus:outline-none focus:ring focus:ring-green-500"
                    name="message"
                    placeholder="Message"
                    maxLength={1200}
                    required
                  ></textarea>
                </div>

                <input
                  type="text"
                  name="company"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                />

                <div className="space-y-2 text-base ml-1">
                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      className="mt-1 mr-2 transform scale-150"
                      required
                    />
                    <span className="pr-2">
                      By submitting this form, you agree to be contacted
                      regarding your enquiry. Your details will not be shared.
                    </span>
                  </label>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full bg-green-700 rounded-md text-white py-2 font-semibold hover:bg-green-800 transition-colors duration-300
                  ${
                    status === "sending" || cooldown
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-700 hover:bg-green-8"
                  }`}
                >
                  Send Message
                </button>

                {status === "error" && (
                  <p className="text-red-600 font-semibold">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
